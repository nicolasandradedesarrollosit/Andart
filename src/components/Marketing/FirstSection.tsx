import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";

function CountUp({ end, suffix = "", duration = 1200 }: { end: number; suffix?: string; duration?: number }) {
    const [value, setValue] = useState(0);
    const ref = useRef<HTMLSpanElement | null>(null);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const start = performance.now();
                    const from = 0;
                    const to = end;

                    const step = (now: number) => {
                        const progress = Math.min(1, (now - start) / duration);
                        const current = Math.floor(from + (to - from) * progress);
                        setValue(current);
                        if (progress < 1) {
                            requestAnimationFrame(step);
                        } else {
                            setValue(to);
                        }
                    };

                    requestAnimationFrame(step);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(el);

        return () => observer.disconnect();
    }, [end, duration]);

    return (
        <span ref={ref}>
            {value}{suffix}
        </span>
    );
}

function FirstSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    const cardsExperience = [
        {
            numero: 20,
            suffix: "+",
            descripcion: "Marcas transformadas"
        },
        {
            numero: 4,
            suffix: "+",
            descripcion: "Años de experiencia"
        },
        {
            numero: 5,
            suffix: "+",
            descripcion: "Proyectos en curso"
        }
    ];

    return (
        <motion.div 
            ref={ref}
            className="flex flex-col justify-center items-center w-full min-h-[30vh] h-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.div 
                className="flex flex-row w-3/4 h-auto gap-4 justify-center items-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                {cardsExperience.map((card, index) => (
                    <motion.div 
                        key={index} 
                        className="flex flex-col justify-center items-center w-1/3 h-40 sm:h-48 md:h-56 lg:h-64 gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    >
                        <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary">
                            <CountUp end={card.numero} suffix={card.suffix} />
                        </p>
                        <p className="text-xs sm:text-sm md:text-lg text-black mt-2 text-center px-4">{card.descripcion}</p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default FirstSection;