import HeroHome from '../components/Home/Hero'
import FirstSection from '../components/Home/FirstSection'
import Footer from '../components/common/Footer'
import SecondSection from '../components/Home/SecondSection'
import ThirdSection from '../components/Home/ThirdSection'

function Home() {
    return (
        <>
            <HeroHome />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <Footer />
        </>
    )
}

export default Home;