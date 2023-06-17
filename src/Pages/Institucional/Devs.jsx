import style from './Devs.module.css';
import React from 'react';
import imgDevs from '../../Images/imgDevs.png';

function Devs() {
    return (
        <section id={style.Devs}>
            <h1 id={style.tituloDevs}>Nossa História</h1>
            <p id={style.textoDevs}>Em fevereiro de <span id={style.anoDevs}>2023</span>, um grupo de estudantes de programação se reúnem com o objetivo de desenvolver uma ferramenta capaz de tornar a comunicação acessível para pessoas com Síndrome de Down, TEA, deficiência física e afonia.</p>
            <img id={style.imgDevs} src={imgDevs} alt="imagem dos desenvolvedores da Pecto"/>
        </section>
    )
}

export default Devs