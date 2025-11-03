import Hero from '../components/Marketing/Hero'
import FirstSection from '@/components/Marketing/FirstSection'
import SecondSection from '@/components/Marketing/SecondSection'
import ThirdSection from '@/components/Marketing/ThirdSection'
import Footer from '@/components/common/Footer'
import { DrawerProvider } from '../components/common/DrawerProvider'

function Marketing() {
    return (
        <>
            <DrawerProvider isOpen={false} onOpen={function (): void {
                throw new Error('Function not implemented.')
            } } onClose={function (): void {
                throw new Error('Function not implemented.')
            } }>
                <Hero />
                <FirstSection />
                <SecondSection />
                <ThirdSection />
                <Footer />
            </DrawerProvider>
        </>
    )
}

export default Marketing;