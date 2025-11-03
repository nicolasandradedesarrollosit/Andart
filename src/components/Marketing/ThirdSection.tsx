import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { 
    useRef,
    useState 
} from "react";
import { 
    Card
} from "@heroui/card";
import { 
    Image 
} from "@heroui/image";
import {
    Button
} from "@heroui/button";

function ThirdSection() {
    const cards = [
        {
            title: "Proyecto Rossence",
            route_jpg: "/project-1.jpg"
        },
        {
            title: "Proyecto Kometia",
            route_jpg: "/project-2.jpg"
        },
        {
            title: "Proyecto Astrolabio",
            route_jpg: "/project-3.jpg"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = cards.length - 1;
            if (nextIndex >= cards.length) nextIndex = 0;
            return nextIndex;
        });
    };

    return (
        <motion.div 
            ref={ref}
            className="flex flex-col justify-center items-center w-full min-h-[70vh] h-auto gap-8 bg-white py-12 sm:py-16 md:py-20 px-4"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.p 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary px-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.1, duration: 0.6 }}
            >
                Proyectos destacados
            </motion.p>

            <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl overflow-hidden flex justify-center items-center">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(_e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        className="absolute w-full"
                    >
                        <Card 
                            className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] xl:h-[500px] border-none bg-black/50 backdrop-blur-md cursor-grab active:cursor-grabbing"
                        >   
                            <Image
                                removeWrapper
                                alt={cards[currentIndex].title}
                                className="z-0 w-full h-full object-cover"
                                src={cards[currentIndex].route_jpg}
                            />
                        </Card>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex flex-col items-center gap-4 mt-4">
                <div className="flex gap-4 items-center">
                    <Button
                        isIconOnly
                        color="primary"
                        variant="flat"
                        onPress={() => paginate(-1)}
                        className="z-10"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </Button>
                    
                    <p className="text-sm sm:text-base md:text-lg font-semibold text-black">
                        {currentIndex + 1} / {cards.length}
                    </p>
                    
                    <Button
                        isIconOnly
                        color="primary"
                        variant="flat"
                        onPress={() => paginate(1)}
                        className="z-10"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}

export default ThirdSection