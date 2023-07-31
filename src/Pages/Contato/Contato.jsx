import style from './Contato.module.css';
import Header from '../Home/Header';
import logo from '../Home/Images/LogoPecto.png';
import Footer from '../Home/Footer';
import CorpoContato from './CorpoContato'
import React from 'react';

function Contato() {
    return (
        <section id={style.Contato}>
            <Header header_color='rgba(228, 239, 255, 0.95)' header_img={logo} />
            <CorpoContato />
            <Footer footer_img={logo} />
        </section>
    )
}

export default Contato