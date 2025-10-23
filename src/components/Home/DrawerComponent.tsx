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

function DrawerComponent() {
    const { isOpen, onClose } = useDrawer();

    const [mobile, setMobile] = useState(false);

    const [fieldsValid, setFieldValid] = useState<{
        nombre: boolean | null,
        email: boolean | null,
        mensaje: boolean | null
    }>({
        nombre: null,
        email: null,
        mensaje: null
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

    const validateAllFields = (e?: any) => {
        if (e && typeof e.preventDefault === 'function') e.preventDefault();

        const allValid = Object.values(fieldsValid).every(Boolean);

        if (!allValid) {
            console.log('Validation failed', fieldsValid);
            return;
        }
        onClose();
    }

    return (
        <Drawer className='bg-black' size={mobile ? 'full' : '2xl'} isOpen={isOpen} onClose={onClose} placement='right' backdrop='blur'>
            <DrawerContent>
                <DrawerHeader>
                    <div className='flex flex-col w-full items-center mt-8 sm:mt-12 md:mt-16 gap-6 sm:gap-8 md:gap-12 px-4'>
                        <Avatar 
                            size='lg' 
                            name='Andart' 
                            src="/Andart.png"
                            className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24'
                        />
                        <p className='text-white text-xl sm:text-2xl md:text-3xl text-center'>
                            Agenda una reunion con Andart
                        </p>
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
                            label='Nombre'
                            isInvalid={fieldsValid.nombre === false}
                            onValueChange={(value) => {
                                setFieldValid((prev) => ({ ...prev, nombre: regex[0].test(value) }));
                            }}
                            errorMessage='El nombre no puede estar vacio' 
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
                                setFieldValid((prev) => ({ ...prev, email: regex[1].test(value) }));
                            }}
                            errorMessage='Ingrese un email valido' 
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
                            isInvalid={fieldsValid.mensaje === false}
                            onValueChange={(value) => {
                                setFieldValid((prev) => ({ ...prev, mensaje: regex[2].test(value) }));
                            }}
                            errorMessage='El mensaje no puede estar vacio'
                        />
                        <div className='flex flex-col sm:flex-row justify-center w-full gap-4 sm:gap-6 md:gap-8 mt-4'>
                            <Button type='submit' className='w-full sm:w-1/2 md:w-1/3' variant='ghost' color='primary'>
                                Enviar
                            </Button>
                            <Button type='reset' className='w-full sm:w-1/2 md:w-1/3' color='default'>
                                Reset
                            </Button>
                        </div>
                    </Form>
                </DrawerBody>
                <DrawerFooter className='px-4 sm:px-6'>
                    <Button color='danger' variant='light' onPress={onClose}>
                        Cerrar
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default DrawerComponent;