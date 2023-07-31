import style from './Institucional.module.scss';
import Header from '../Home/Header';
import logo from '../Home/Images/LogoPecto.png';
import Footer from '../Home/Footer';
import Headerinstitucional from '../Institucional/HeaderInstitucional'
import Devs from '../Institucional/Devs'
import Sobre from '../Institucional/Sobre'

import React from 'react';

function Institucional() {
    return (
        <section id={style.Institucional}>
            <Header header_color='rgba(228, 239, 255, 0.95)' header_img={logo} />
            <Headerinstitucional></Headerinstitucional>
            <Devs></Devs>
            <Sobre></Sobre>
            <Footer footer_img={logo} />
        </section>
    )
}

export default Institucional
