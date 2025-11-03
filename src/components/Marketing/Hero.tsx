import Navbar from '../common/Navbar';

import ButtonLoading from '../common/ButtonLoading';

import {
    Button
} from '@heroui/button';

import {
    useDrawer
} from '../common/DrawerProvider';

import DrawerComponent from '../common/DrawerComponent';
import { motion } from 'motion/react';

function Hero() {
    const { onOpen } = useDrawer();

    return (
        <>
            <motion.div 
                className='bg-cover bg-center bg-hero-pattern-2 min-h-[60vh] h-auto flex flex-col items-center'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <Navbar page='marketing' />
                <motion.div 
                    className='flex flex-col mx-4 sm:mx-8 md:mx-16 lg:mx-32 my-8 sm:my-16 md:my-24 lg:my-32 items-center text-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full h-full px-4 py-8'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <motion.div 
                        className='flex flex-col gap-4'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary'>Hacemos que te vean,</p>
                        <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white'>te recuerden y te elijas.</p>
                    </motion.div>
                    <motion.p 
                        className='text-base sm:text-lg md:text-xl opacity-80 px-4'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >Transformamos tu presencia en resultados reales, conectando estrategia, creatividad y datos.</motion.p>
                    <motion.div 
                        className='flex flex-col sm:flex-row items-center justify-center w-full gap-4 sm:gap-6 md:gap-8'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <ButtonLoading domain='#FAQ-SECTION-DESIGN' contentButton='Preguntas' color='primary' text='white'/>
                        <Button className='text-white' variant='ghost' color='primary' onPress={onOpen}>Contacto</Button>
                    </motion.div>
                </motion.div>
            </motion.div>
            <DrawerComponent />
        </>
    )
}

export default Hero;