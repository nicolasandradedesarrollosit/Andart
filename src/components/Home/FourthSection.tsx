import {
    Accordion,
    AccordionItem
} from '@heroui/accordion';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

function FourthSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    const faq = [
        {
            question: "¿Qué servicios ofrecen en Andart?",
            answer: "En Andart ofrecemos desarrollo de software a medida, incluyendo aplicaciones web, móviles y de escritorio. También brindamos servicios de consultoría, integración de sistemas, mantenimiento y soporte técnico."
        },
        {
            question: "¿Cómo funciona su proceso de desarrollo?",
            answer: "Utilizamos metodologías ágiles como Scrum para asegurar un desarrollo iterativo y colaborativo. Comenzamos con una fase de entendimiento del problema, luego diseño, desarrollo paso a paso, pruebas y finalmente lanzamiento, ajustando junto al cliente en cada etapa."
        },
        {
            question: "¿Qué tecnologías utilizan?",
            answer: "Trabajamos con una amplia gama de tecnologías modernas, incluyendo React, Node.js, Python, bases de datos SQL y NoSQL, y herramientas de cloud como AWS y Vercel. Adaptamos las tecnologías según las necesidades del proyecto."
        },
        {
            question: "¿Cuánto tiempo toma un proyecto?",
            answer: "El tiempo varía según la complejidad del proyecto. Un MVP básico puede tomar 1-3 meses, mientras que proyectos más grandes pueden extenderse a 6-12 meses o más. Proporcionamos estimaciones detalladas después de la consulta inicial."
        },
        {
            question: "¿Cuál es su modelo de precios?",
            answer: "Ofrecemos precios competitivos basados en el alcance del proyecto. Podemos trabajar con presupuestos fijos para proyectos definidos o con modelos por hora/día para desarrollos más flexibles. Contáctanos para una cotización personalizada."
        },
        {
            question: "¿Proporcionan mantenimiento y soporte después del lanzamiento?",
            answer: "Sí, ofrecemos servicios de mantenimiento continuo, actualizaciones de seguridad, soporte técnico y mejoras post-lanzamiento para asegurar que tu software siga funcionando óptimamente."
        },
        {
            question: "¿Cómo garantizan la calidad y seguridad del software?",
            answer: "Implementamos pruebas automatizadas, revisiones de código y auditorías de seguridad. Nos aseguramos de que el software cumpla con estándares de calidad y proteja los datos de nuestros clientes."
        }
    ]
    return (
        <motion.div 
            ref={ref}
            id="FAQ-SECTION" 
            className='flex flex-col items-center bg-white w-full min-h-[60vh] h-auto justify-center gap-12 text-black py-8 sm:py-12 md:py-16'
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.div 
                className='flex flex-col justify-center text-center gap-2 px-4'
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.1, duration: 0.6 }}
            >
                <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary'>Preguntas frecuentes,</p>
                <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black'>todo lo que necesitas saber</p>
            </motion.div>
            <motion.div 
                className='flex flex-col gap-4 w-95/100 sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 shadow-lg rounded-xl bg-gray-50'
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                <Accordion variant='bordered'>
                    {faq.map((item, index) => (
                        <AccordionItem key={index} aria-label={item.question} title={item.question}>
                            {item.answer}
                        </AccordionItem>
                    ))}
                </Accordion>
            </motion.div>
        </motion.div>
    )
}

export default FourthSection