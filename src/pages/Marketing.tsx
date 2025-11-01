import Hero from '../components/Marketing/Hero'
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
            </DrawerProvider>
        </>
    )
}

export default Marketing;