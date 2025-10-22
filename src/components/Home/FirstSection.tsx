import {
    Card,
    CardFooter,
} from '@heroui/card';

import {
    Image
} from '@heroui/image';

function FirstSection() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-white gap-8 sm:gap-10 md:gap-12 py-8 sm:py-12 md:py-16">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary px-4 text-center">Como trabajamos?</p>
            <p className="text-sm sm:text-base md:text-lg text-black w-full sm:w-4/5 md:w-3/4 lg:w-2/3 text-center opacity-50 px-4">En Andart nosotros nos dedicamos a solucionar problemas, brindando soluciones informaticas para todo tipo de empresas</p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap w-full sm:w-4/5 md:w-3/4 lg:w-2/3 items-center justify-center gap-6 sm:gap-8 px-4">
                <Card isFooterBlurred className='border-none w-full sm:w-80 md:w-72 lg:w-80'>
                    <Image src="/card-1.png" className='object-cover w-full h-48 sm:h-56 md:h-64'/>
                    <CardFooter className="flex flex-row justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-full shadow-small z-10">
                        <p className="text-xs sm:text-sm text-black/80">Entendemos el problema, no solo el pedido.</p>
                    </CardFooter>
                </Card>
                <Card isFooterBlurred className='border-none w-full sm:w-80 md:w-72 lg:w-80'>
                    <Image src="/card-2.png" className='object-cover w-full h-48 sm:h-56 md:h-64'/>
                    <CardFooter className="flex flex-row justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-full shadow-small z-10">
                        <p className="text-xs sm:text-sm text-black/80">Diseñamos pensando en la experiencia.</p>
                    </CardFooter>
                </Card>
                <Card isFooterBlurred className='border-none w-full sm:w-80 md:w-72 lg:w-80'>
                    <Image src="/card-3.png" className='object-cover w-full h-48 sm:h-56 md:h-64'/>
                    <CardFooter className="flex flex-row justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-full shadow-small z-10">
                        <p className="text-xs sm:text-sm text-black/80">Desarrollamos paso a paso.</p>
                    </CardFooter>
                </Card>
                <Card isFooterBlurred className='border-none w-full sm:w-80 md:w-72 lg:w-80'>
                    <Image src="/card-4.png" className='object-cover w-full h-48 sm:h-56 md:h-64'/>
                    <CardFooter className="flex flex-row justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-full shadow-small z-10">
                        <p className="text-xs sm:text-sm text-black/80">Lo ajustamos junto a vos.</p>
                    </CardFooter>
                </Card>
                <Card isFooterBlurred className='border-none w-full sm:w-80 md:w-72 lg:w-80'>
                    <Image src="/card-5.png" className='object-cover w-full h-48 sm:h-56 md:h-64'/>
                    <CardFooter className="flex flex-row justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-full shadow-small z-10">
                        <p className="text-xs sm:text-sm text-black/80">Lo lanzamos al mundo.</p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default FirstSection;