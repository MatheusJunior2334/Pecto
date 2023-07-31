import style from './Devs.module.scss';
import React from 'react';
import imgDevs from './Images/imgDevs.png';

function Devs() {
    return (
        <section id={style.Devs}>
            <h2 className={style.tituloDevs}>Nossa História</h2>
            <p className={style.textoDevs}>Em fevereiro de <span className={style.anoDevs}>2023</span>, um grupo de estudantes de programação se reúnem com o objetivo de desenvolver uma ferramenta capaz de tornar a comunicação acessível para pessoas com Síndrome de Down, TEA, deficiência física e afonia.</p>
            <img className={style.imgDevs} src={imgDevs} alt="imagem dos desenvolvedores da Pecto"/>
        </section>
    )
}

export default Devs