import style from './PoliticaPrivacidade.module.css';

import Header from '../Home/Header';
import Section1PeP from './Section1PeP';
import Footer from '../Home/Footer';

import logo from '../Home/Images/LogoPecto.png';

function PoliticaPrivacidade() {
    return(
        <section id={style.politica_privacidade}>
            <Header header_color='rgba(228, 239, 255, 0.95)' header_img={logo} />
            <Section1PeP />
            <Footer footer_img={logo} />
        </section>
    )
}

export default PoliticaPrivacidade