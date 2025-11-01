import Hero from '../components/Marketing/Hero'
import FirstSection from '@/components/Marketing/FirstSection'
import SecondSection from '@/components/Marketing/SecondSection'
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
            </DrawerProvider>
        </>
    )
}

export default Marketing;