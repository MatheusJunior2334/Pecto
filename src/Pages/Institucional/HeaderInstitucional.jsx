import style from './HeaderInstitucional.module.scss';
import React from 'react';

function Headerinstitucional() {
    return (
        <section id={style.Headerinstitucional}>
            <h2>Conheça a Pecto</h2>
            <h3>Desde <span className={style.ano}>2023</span> tornando a comunicação acessível</h3>
        </section>
    )
}

export default Headerinstitucional