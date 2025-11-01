import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter
} from '@heroui/drawer';

import {
    useEffect,
    useState
} from 'react';

import {
    Form
} from '@heroui/form';

import {
    Input,
    Textarea
} from '@heroui/input';

import {
    Button
} from '@heroui/button'; 

import { useDrawer } from './DrawerProvider';

import {
    Avatar
} from '@heroui/avatar';

import {
    sendMessage
} from '../../supabase-functions/insert-message';

import {
    SendMessageParams
} from '../../types/supabase/sendMessage';

import {
    FormDataParams
} from '../../types/home/formData';

import {
    Alert
} from '@heroui/alert';

function DrawerComponent() {
    const [loading, setLoading] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);

    const [formData, setFormData] = useState<FormDataParams>({
        name: '',
        email: '',
        message: ''
    });

    const { isOpen, onClose } = useDrawer();

    const [mobile, setMobile] = useState(false);

    const [fieldsValid, setFieldValid] = useState<{
        name: boolean | null,
        email: boolean | null,
        message: boolean | null
    }>({
        name: null,
        email: null,
        message: null
    })

    const regex = [
        /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{3,}\s+[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/,
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        /\S+/
    ];

    useEffect(() => {
        const handleResize = () => {
            setMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const validateAllFields = async (e?: any) => {
        if (e && typeof e.preventDefault === 'function') e.preventDefault();

        const form = e.target as HTMLFormElement;

        const allValid = Object.values(fieldsValid).every(Boolean);

        if (!allValid) {
            console.log('Validation failed', fieldsValid);
            return;
        }

        try {
            setLoading(true);
            const params: SendMessageParams = {
                name: formData.name.trim(),
                email: formData.email.trim(),
                message: formData.message.trim()
            };

            await sendMessage(params);

            setFormData({
                name: '',
                email: '',
                message: ''
            });

            setLoading(false);
            setAlertVisible(true);
            form.reset();
            setFieldValid({
                name: null,
                email: null,
                message: null
            });
        }
        catch (err){
            console.error('Error sending message:', err);
            setLoading(false);
        }
    }

    return (
        <Drawer className='bg-black' size={mobile ? 'full' : '2xl'} isOpen={isOpen} onClose={() => {setAlertVisible(false); onClose();}} placement='right' backdrop='blur'>
            <DrawerContent>
                <DrawerHeader>
                    <div className='flex flex-col w-full items-center mt-8 sm:mt-12 md:mt-16 gap-6 sm:gap-8 md:gap-12 px-4'>
                        <Avatar 
                            size='lg' 
                            name='Andart' 
                            src="/logo.png"
                            className='bg-transparent w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24'
                        />
                        <div className='flex flex-col gap-4 text-center'>
                            <p className='text-white text-xl sm:text-2xl md:text-3xl text-center'>
                                Agendá una reunión con Andart
                            </p>
                            <p className='text-xs sm:text-sm md:text-md opacity-80 px-4'>Responderemos tu mensaje en las próximas 24 horas.</p>
                        </div>
                    </div>
                </DrawerHeader>
                <DrawerBody className='flex flex-col items-center px-4 sm:px-6 md:px-8'>
                    <Form onSubmit={validateAllFields} className='flex flex-col gap-6 sm:gap-7 md:gap-8 w-full sm:w-5/6 md:w-2/3 mt-8 sm:mt-10 md:mt-12'>
                        <Input 
                            classNames={{
                                inputWrapper: "bg-black text-white border border-white/10 border-[2px] focus:outline-none",
                                label: "text-sm sm:text-base"
                            }} 
                            variant='faded' 
                            isRequired 
                            label='Nombre completo'
                            isInvalid={fieldsValid.name === false}
                            onValueChange={(value) => {
                                setFormData((prev) => ({ ...prev, name: value }));
                                setFieldValid((prev) => ({ ...prev, name: regex[0].test(value) }));
                            }}
                            errorMessage='El nombre debe contener al menos 3 letras y un apellido.' 
                        />
                        <Input 
                            classNames={{
                                inputWrapper: "bg-black text-white border border-white/10 border-[2px] focus:outline-none",
                                label: "text-sm sm:text-base"
                            }} 
                            variant='faded' 
                            isRequired 
                            label='Email'
                            isInvalid={fieldsValid.email === false}
                            onValueChange={(value) => {
                                setFormData((prev) => ({ ...prev, email: value }));
                                setFieldValid((prev) => ({ ...prev, email: regex[1].test(value) }));
                            }}
                            errorMessage='Ingrese un email válido (ejemplo@dominio.com).' 
                        />
                        <Textarea 
                            classNames={{
                                inputWrapper: "bg-black text-white border border-white/10 border-[2px] focus:outline-none",
                                label: "text-sm sm:text-base"
                            }} 
                            variant='faded' 
                            isClearable 
                            isRequired 
                            label='Mensaje' 
                            isInvalid={fieldsValid.message === false}
                            onValueChange={(value) => {
                                setFormData((prev) => ({ ...prev, message: value }));
                                setFieldValid((prev) => ({ ...prev, message: regex[2].test(value) }));
                            }}
                            errorMessage='El mensaje no puede estar vacío.'
                        />
                        <div className='flex flex-col sm:flex-row justify-center w-full gap-4 sm:gap-6 md:gap-8 mt-4'>
                            <Button isLoading={loading} type='submit' className='w-full sm:w-1/2 md:w-1/3' variant='ghost' color='primary'>
                                Enviar
                            </Button>
                            <Button type='reset' className='w-full sm:w-1/2 md:w-1/3' color='default' onPress={() => {setAlertVisible(false)}}>
                                Restablecer
                            </Button>
                        </div>
                        <Alert 
                            variant='solid'
                            color='success'
                            description='Tu mensaje ha sido enviado con éxito.'
                            className='w-full text-black transition-all duration-300 ease-in-out'
                            isVisible={alertVisible}
                            onClose={() => setAlertVisible(false)}
                        />
                    </Form>
                </DrawerBody>
                <DrawerFooter className='px-4 sm:px-6'>
                    <Button color='danger' variant='light' onPress={() => {setAlertVisible(false); onClose();}}>
                        Cerrar
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default DrawerComponent;