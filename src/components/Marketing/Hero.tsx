import Navbar from '../common/Navbar';

import ButtonLoading from '../common/ButtonLoading';

import {
    Button
} from '@heroui/button';

import {
    useDrawer
} from '../common/DrawerProvider';

import DrawerComponent from '../common/DrawerComponent';

function Hero() {
    const { onOpen } = useDrawer();

    return (
        <>
            <div className='bg-cover bg-center bg-hero-pattern-2 min-h-[60vh] h-auto flex flex-col items-center'>
                <Navbar page='marketing' />
                <div className='flex flex-col mx-4 sm:mx-8 md:mx-16 lg:mx-32 my-8 sm:my-16 md:my-24 lg:my-32 items-center text-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full h-full px-4 py-8'>
                    <div className='flex flex-col gap-4'>
                        <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary'>Hacemos que te vean,</p>
                        <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white'>te recuerden y te elijan.</p>
                    </div>
                    <p className='text-base sm:text-lg md:text-xl opacity-80 px-4'>Transformamos tu presencia en resultados reales, conectando estrategia, creatividad y datos.</p>
                    <div className='flex flex-col sm:flex-row items-center justify-center w-full gap-4 sm:gap-6 md:gap-8'>
                        <ButtonLoading domain='#FAQ-SECTION-DESIGN' contentButton='Preguntas' color='primary' text='white'/>
                        <Button className='text-white' variant='ghost' color='primary' onPress={onOpen}>Contacto</Button>
                    </div>
                </div>
            </div>
            <DrawerComponent />
        </>
    )
}

export default Hero;