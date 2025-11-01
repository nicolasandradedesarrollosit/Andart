import {
    Card,
    CardHeader,
    CardBody,
} from "@heroui/card"

import {
    Divider
} from "@heroui/divider"

import {
    Alert
} from "@heroui/alert"


function SecondSection() {

    const cards = [
  {
    title: "Estrategia de Marca",
    subtitle: "Construimos una identidad sólida que conecta con tu audiencia.",
    content:
      "Diseñamos y desarrollamos una identidad visual y verbal coherente, memorable y alineada con tu propósito. Desde la definición del tono y personalidad de la marca hasta la creación de logotipos, paletas cromáticas, tipografías, patrones gráficos y guías de estilo completas. Nuestro enfoque busca que tu marca no solo se vea bien, sino que transmita valores, genere confianza y cree una conexión emocional auténtica con tu público."
  },
  {
    title: "Marketing Digital",
    subtitle: "Llevamos tu mensaje a las personas correctas.",
    content:
      "Planificamos, ejecutamos y optimizamos estrategias digitales orientadas al crecimiento y visibilidad de tu negocio. Creamos contenido relevante, gestionamos redes sociales, implementamos SEO y campañas pagas, y analizamos métricas para mejorar decisiones. No nos quedamos en el ruido: atraemos audiencias calificadas, impulsamos interacción, aumentamos conversiones y construimos una presencia digital que realmente aporta resultados."
  },
  {
    title: "Automatización y Funnels",
    subtitle: "Deja que tu negocio trabaje incluso cuando vos no lo mirás.",
    content:
      "Creamos embudos de conversión inteligentes que acompañan a tu usuario desde el primer contacto hasta la compra y fidelización. Integración de herramientas, automatización de mensajes, email marketing segmentado, remarketing y flujos de seguimiento personalizados. Optimizamos cada etapa para que tu marca genere oportunidades en piloto automático, nutra relaciones y convierta clientes con procesos eficientes, medibles y escalables."
  }
]

    return(
        <div className="flex flex-col justify-center items-center w-full min-h-[40vh] h-auto gap-8 bg-gradient-to-br from-slate-900 via-blue-900/80 to-slate-950 py-12 px-4">
            <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl justify-center items-center lg:items-stretch px-4 text-center">
                {cards.map((card, index) => (
                    <Card 
                        key={index} 
                        className={`w-full max-w-xs lg:max-w-sm min-h-[320px] bg-white/5 backdrop-blur-2xl border-white/10 flex flex-col items-center shadow-lg transition-all duration-300 ${index === 1 ? 'lg:max-w-md lg:min-h-[450px] lg:scale-105' : ''}`} 
                        isBlurred
                    >
                        <CardHeader className="flex flex-col justify-center w-[97%] my-[5px] gap-2 px-3 sm:px-4">
                            <div className="flex flex-col gap-1">
                                <p className="text-white/90 text-base sm:text-lg font-semibold">{card.title}</p>
                                <p className="text-white/50 text-xs">{card.subtitle}</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody className="px-3 sm:px-4 py-3 flex-grow mx-4">
                            <p className="text-white/80 text-xs sm:text-sm leading-relaxed indent-[10px]">{card.content}</p>
                        </CardBody>   
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default SecondSection;