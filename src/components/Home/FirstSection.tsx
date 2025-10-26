import { useEffect, useRef, useState } from "react";

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
    const cardsExperience = [
        {
            numero: 10,
            suffix: "+",
            descripcion: "Proyectos completados"
        },
        {
            numero: 3,
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
        <div className="flex flex-col justify-center items-center w-full min-h-[40vh] h-auto ">
            <div className="flex flex-row w-3/4 h-auto gap-4 justify-center items-center">
                {cardsExperience.map((card, index) => (
                    <div key={index} className="flex flex-col justify-center items-center w-1/3 h-40 sm:h-48 md:h-56 lg:h-64 gap-2 ">
                        <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary">
                            <CountUp end={card.numero} suffix={card.suffix} />
                        </p>
                        <p className="text-xs sm:text-sm md:text-lg text-black mt-2 text-center px-4">{card.descripcion}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FirstSection;