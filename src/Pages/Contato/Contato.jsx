import style from './Contato.module.css';
import HeaderBlog from '../Home/HeaderBlog';
import FooterBlog from '../Home/FooterBlog';
import CorpoContato from './CorpoContato'
import React from 'react';

function Contato() {
    return (
        <section id={style.Contato}>
            <HeaderBlog header_color='rgba(228, 239, 255, 0.95)' menu_color='rgba(228, 239, 255, 0.95)' />
            <CorpoContato />
            <FooterBlog />
        </section>
    )
}

export default Contato