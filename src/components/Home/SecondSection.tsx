import {
    Card,
    CardFooter,
} from '@heroui/card';

import {
    Image
} from '@heroui/image';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

function SecondSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    const cards = [
        { image: "/card-1.png", text: "Entendemos el problema, no solo el pedido." },
        { image: "/card-2.png", text: "Diseñamos pensando en la experiencia." },
        { image: "/card-3.png", text: "Desarrollamos paso a paso." },
        { image: "/card-4.png", text: "Lo ajustamos junto a vos." },
        { image: "/card-5.png", text: "Lo lanzamos al mundo." }
    ];

    return (
        <motion.div 
            ref={ref}
            className="flex flex-col items-center h-auto bg-white gap-8 sm:gap-10 md:gap-12 py-8 sm:py-12 md:py-16"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.p 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary px-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.1, duration: 0.6 }}
            >¿Cómo trabajamos?</motion.p>
            <motion.p 
                className="text-sm sm:text-base md:text-lg text-black w-full sm:w-4/5 md:w-3/4 lg:w-2/3 text-center opacity-50 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >En Andart nos dedicamos a solucionar problemas, brindando soluciones informáticas para todo tipo de empresas.</motion.p>
            <motion.div 
                className="flex flex-col sm:flex-row sm:flex-wrap w-full sm:w-4/5 md:w-3/4 lg:w-2/3 items-center justify-center gap-6 sm:gap-8 px-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    >
                        <Card isFooterBlurred className='border-none w-full sm:w-80 md:w-72 lg:w-80 h-64'>
                            <Image src={card.image} className='object-cover w-full h-full'/>
                            <CardFooter className="flex flex-row justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-full shadow-small z-10">
                                <p className="text-xs sm:text-sm text-black/80">{card.text}</p>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default SecondSection;