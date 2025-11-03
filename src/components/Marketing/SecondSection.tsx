import {
    Card,
    CardHeader,
    CardBody,
} from "@heroui/card";

import {
    Divider
} from "@heroui/divider";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

function SecondSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    const cards = [
  {
    title: "Estrategia de Marca",
    subtitle: "Construimos una identidad sólida que conecta con tu audiencia.",
    content:
      "Diseñamos una identidad visual y verbal coherente, memorable y alineada con tu propósito. Logotipos, paletas cromáticas, tipografías y guías de estilo que transmitan valores, generen confianza y creen conexión emocional auténtica con tu público."
  },
  {
    title: "Marketing Digital",
    subtitle: "Llevamos tu mensaje a las personas correctas.",
    content:
      "Planificamos y ejecutamos estrategias digitales para el crecimiento de tu negocio. Contenido relevante, redes sociales, SEO y campañas pagas. Atraemos audiencias calificadas, impulsamos interacción y aumentamos conversiones con una presencia digital que aporta resultados."
  },
  {
    title: "Automatización y Funnels",
    subtitle: "Deja que tu negocio trabaje incluso cuando vos no lo mirás.",
    content:
      "Creamos embudos de conversión inteligentes que acompañan al usuario desde el primer contacto hasta la compra. Integración de herramientas, automatización de mensajes y email marketing segmentado. Optimizamos cada etapa para generar oportunidades en piloto automático con procesos eficientes y escalables."
  }
]

    return(
        <motion.div 
            ref={ref}
            className="flex flex-col justify-center items-center w-full min-h-[40vh] h-auto gap-8 bg-gradient-to-br from-slate-900 via-blue-900/80 to-slate-950 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.div 
                className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10 w-full max-w-7xl justify-center items-center lg:items-stretch px-2 sm:px-4 text-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    >
                        <Card 
                            className="w-full max-w-sm lg:max-w-xs xl:max-w-sm h-auto lg:min-h-[420px] xl:min-h-[380px] bg-white/5 backdrop-blur-2xl border-white/10 flex flex-col items-center shadow-lg transition-all duration-300"
                            isBlurred
                        >
                            <CardHeader className="flex flex-col justify-center min-h-1/3 w-[97%] my-[5px] gap-2 px-4 sm:px-5 md:px-6">
                                <div className="flex flex-col gap-1">
                                    <p className="text-white/90 text-base sm:text-lg lg:text-base xl:text-lg font-semibold">{card.title}</p>
                                    <p className="text-white/50 text-xs sm:text-sm lg:text-xs xl:text-sm">{card.subtitle}</p>
                                </div>
                            </CardHeader>
                            <Divider />
                            <CardBody className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 flex-grow mx-4">
                                <p className="text-white/80 text-xs sm:text-sm lg:text-xs xl:text-sm leading-relaxed indent-[10px] p-2 line-clamp-none">{card.content}</p>
                            </CardBody>   
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default SecondSection;