import Header from './Header';
import logo from './Images/LogoPecto.png';
import Section1Home from './InitialSectionHome';
import Section2Home from './DestaquesHome';
import Section3Home from './Section3Home';
import Planos from './Planos';
import Depoimentos from './Depoimentos';
import Footer from './Footer';

function Home() {
    return (
        <main>
            <Header header_color='rgba(228, 239, 255, 0.95)' header_img={logo} />
            <Section1Home />
            <Section2Home />
            <Section3Home />
            <Planos />
            <Depoimentos />
            <Footer footer_img={logo} />
        </main>
    )
}

export default Home