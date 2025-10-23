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

    useEffect(() => {
        const handleResize = () => {
            setMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


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
                    <Form className='flex flex-col gap-6 sm:gap-7 md:gap-8 w-full sm:w-5/6 md:w-2/3 mt-8 sm:mt-10 md:mt-12'>
                        <Input 
                            classNames={{
                                inputWrapper: "bg-black text-white border border-white/10 border-[2px] focus:outline-none",
                                label: "text-sm sm:text-base"
                            }} 
                            variant='faded' 
                            isRequired 
                            label='Nombre' 
                        />
                        <Input 
                            classNames={{
                                inputWrapper: "bg-black text-white border border-white/10 border-[2px] focus:outline-none",
                                label: "text-sm sm:text-base"
                            }} 
                            variant='faded' 
                            isRequired 
                            label='Email' 
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
                        />
                        <div className='flex flex-col sm:flex-row justify-center w-full gap-4 sm:gap-6 md:gap-8 mt-4'>
                            <Button className='w-full sm:w-1/2 md:w-1/3' variant='ghost' color='primary'>
                                Enviar
                            </Button>
                            <Button className='w-full sm:w-1/2 md:w-1/3' color='default'>
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