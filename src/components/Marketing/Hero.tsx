import Navbar from '../common/Navbar'

import ButtonLoading from '../common/ButtonLoading'

import {
    Button
} from '@heroui/button';

function Hero() {
    return (
        <div className='bg-black min-h-[60vh] h-auto flex flex-col items-center'>
            <Navbar page='marketing' />
            <div className='flex flex-col mx-4 sm:mx-8 md:mx-16 lg:mx-32 my-8 sm:my-16 md:my-24 lg:my-32 items-center text-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full h-full px-4 py-8'>
                <div className='flex flex-col gap-4'>
                    <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary'>Un lugar para tus ideas,</p>
                    <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white'>un espacio para tu creatividad.</p>
                </div>
                <p className='text-base sm:text-lg md:text-xl opacity-80 px-4'>Explora, crea y comparte tus proyectos con nosotros.</p>
                <div className='flex flex-col sm:flex-row items-center justify-center w-full gap-4 sm:gap-6 md:gap-8'>
                    <ButtonLoading domain='#FAQ-SECTION' contentButton='Preguntas' variant='flat' color='primary' />
                    <Button variant='ghost' color='primary' onPress={() => {console.log('Drawer de marketing próximamente')}}>Contacto</Button>
                </div>
            </div>
        </div>
    )
}

export default Hero;