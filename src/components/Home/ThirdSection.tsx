import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
} from "@heroui/card"

import {
    Divider
} from "@heroui/divider"

import {
    Button
} from "@heroui/button"

import {
    Alert
} from "@heroui/alert"

import {
    useDrawer
} from './DrawerProvider'

function ThirdSection() {

    const {onOpen} = useDrawer();

    const cards = [
        {
            title: "Landing Page",
            price: "$99",
            description: "Ideal para emprendedores y pequeñas empresas que buscan establecer su presencia en línea con una página atractiva y funcional.",
            features: [
                "Diseño personalizado",
                "Optimización SEO",
                "Una pantalla de presentación",
                "Integración con redes sociales",
                "Entrega en 3-5 días hábiles"
            ]
        },
        {
            title: "Sitio Web Corporativo",
            price: "$199",
            description: "Perfecto para empresas medianas que desean una presencia en línea sólida con múltiples secciones y funcionalidades.",
            features: [
                "Diseño profesional",
                "Optimización SEO avanzada",
                "Hasta 4 pantallas (Inicio, Servicios, Sobre Nosotros, Contacto)",
                "Formulario de contacto",
                "Integración con redes sociales",
                "Entrega en 7-10 días hábiles"
            ]
        },
        {
            title: "Tienda en Línea",
            price: "$449",
            description: "Ideal para negocios que desean vender productos o servicios en línea con una plataforma de comercio electrónico completa.",
            features: [
                "Diseño personalizado",
                "Optimización SEO",
                "Integración con pasarelas de pago",
                "Catálogo de productos",
                "Carrito de compras",
                "Hasta 10 pantallas personalizadas",
                "Entrega en 15-20 días hábiles"
            ]
        }
    ]

    const svg = (
        <svg className="h-[10px] w-[10px] opacity-70" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 15 15">
            <path fill="#FFF" fillRule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0Zm7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768l3.392 2.827Z" clipRule="evenodd"/>
        </svg>
    )

    return(
        <div className="flex flex-col justify-center items-center w-full min-h-[40vh] h-auto gap-8 bg-gradient-to-br from-slate-900 via-blue-900/80 to-slate-950 py-12 px-4">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white px-4 text-center">Nuestros precios</p>
            
            <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl justify-center items-center lg:items-stretch px-4">
                {cards.map((card, index) => (
                    <Card 
                        key={index} 
                        className="w-full max-w-[400px] lg:w-[400px] min-h-[600px] bg-white/5 backdrop-blur-2xl border-white/10 flex flex-col items-center shadow-lg" 
                        isBlurred
                    >
                        <CardHeader className="flex flex-col justify-center w-[97%] my-[5px] min-h-[200px] gap-4 sm:gap-8 px-4 sm:px-0">
                            <div className="ml-2 flex flex-col gap-2">
                                <p className="text-white/90 text-xl sm:text-2xl font-semibold">{card.title}</p>
                                <p className="text-white/50 text-xs sm:text-sm indent-[10px]">{card.description}</p>
                            </div>
                            <div className="flex flex-row ml-4 sm:ml-8 justify-start w-full items-end">
                                <p className="font-bold text-4xl sm:text-5xl text-white/90">{card.price}</p>
                                <p className="text-white/40 text-xs">/usd</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody className="px-4 sm:px-6">
                            {card.features.map((feature, idx) => (
                                <div key={idx} className="flex flex-row items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                                    <div className="mt-1">
                                        {svg}
                                    </div>
                                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed">{feature}</p>
                                </div>
                            ))}
                        </CardBody>
                        <CardFooter className="flex justify-center px-4 sm:px-6">
                            <Button className="w-full sm:w-9/10 text-white" variant={index === 1 ? "ghost" : "solid"} color="primary" onPress={onOpen}>
                                Contactarse
                            </Button>
                        </CardFooter>    
                    </Card>
                ))}
            </div>
            
            <Alert
                className="bg-black text-white w-full max-w-[90%] sm:max-w-[80%] lg:max-w-[60%]"
                color="primary"
                variant="solid"
                title={<span className="text-sm sm:text-base md:text-lg font-semibold">Información importante</span>}
                description={<span className="text-xs sm:text-sm md:text-base">Para sitios web personalizados, rellene el formulario de contacto y nos contactaremos en breve para realizar la tasación.</span>}
            />
        </div>
    )
}

export default ThirdSection;