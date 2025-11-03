import ButtonLoading from '../common/ButtonLoading';

import NavbarHero from '../common/Navbar';

import { 
    useDrawer
} from '../common/DrawerProvider';

import {
    Button
} from '@heroui/button';

import DrawerComponent from '../common/DrawerComponent';
import { motion } from 'motion/react';

function HeroHome() {
    const {onOpen} = useDrawer();

    return (
            <>
                <motion.div 
                    className='bg-cover bg-center bg-hero-pattern min-h-[60vh] h-auto flex flex-col items-center'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <NavbarHero page='home' />
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
                            <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary'>Un lugar para tus ideas,</p>
                            <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white'>un espacio para tu creatividad.</p>
                        </motion.div>
                        <motion.p 
                            className='text-base sm:text-lg md:text-xl opacity-80 px-4'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >Explora, crea y comparte tus proyectos con nosotros.</motion.p>
                        <motion.div 
                            className='flex flex-col sm:flex-row items-center justify-center w-full gap-4 sm:gap-6 md:gap-8'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            <ButtonLoading domain='#FAQ-SECTION' contentButton='Preguntas' color='primary' text='white'/>
                            <Button className='text-white' variant='ghost' color='primary' onPress={onOpen}>Contacto</Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <DrawerComponent />
            </>
    )
}

export default HeroHome;