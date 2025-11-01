import HeroHome from '../components/Home/Hero'
import FirstSection from '../components/Home/FirstSection'
import Footer from '../components/common/Footer'
import SecondSection from '../components/Home/SecondSection'
import ThirdSection from '../components/Home/ThirdSection'
import FourthSection from '../components/Home/FourthSection'
import { DrawerProvider } from '@/components/common/DrawerProvider'

function Home() {
    return (
        <>
            <DrawerProvider isOpen={false} onOpen={function (): void {
                throw new Error('Function not implemented.')
            } } onClose={function (): void {
                throw new Error('Function not implemented.')
            } }>
                <HeroHome />
                <FirstSection />
                <SecondSection />
                <ThirdSection />
                <FourthSection />
                <Footer />
            </DrawerProvider>
        </>
    )
}

export default Home;