import style from './Faq.module.css';

import Header from '../Home/Header';

import Footer from '../Home/Footer';

import logo from '../Home/Images/LogoPecto.png';
import Section1 from './Section1';

function Faq() {
    return(
        <section id={style.politica_privacidade}>
            <Header header_color='rgba(228, 239, 255, 0.95)' header_img={logo} />
            <Section1/>
            <Footer footer_img={logo} />
        </section>
    )
}

export default Faq