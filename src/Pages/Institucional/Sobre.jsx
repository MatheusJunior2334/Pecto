import style from './Sobre.module.scss';
import React from 'react';
import logoAndreLuiz from './Images/logoAndreLuiz.png';
import caderno from './Images/caderno.png';
import app from './Images/app.png';

function Sobre() {
    return (
        <section id={style.Sobre}>
           <p>Para tal, foram realizadas minuciosas pesquisas para compreender como atender todas as necessidades do nosso público. Entre elas, a visita à Casas André Luiz, instituição de caráter filantrópico e religioso que fornece atendimento às pessoas com deficiência intelectual ou física em regime ambulatorial ou de internato.</p>
           <div className={style.imgPai}>
                <img src={logoAndreLuiz} alt="logo da instituição Casas André Luiz" />
           </div>
            <div className={style.imgPai}>
                <img src={caderno} alt="imagem do caderno utilizado para a comunicação" />
            </div>
           <p>Durante a visita, notamos a dificuldade dos assistidos de se comunicarem. A fala era suprida pela utilização de um caderno em que continha diversas figuras com textos que simbolizavam contextos do dia dia. Contudo, ele tinha que apontar para aquela que melhor representava aquilo que ele gostaria de falar e se porventura não estivesse na primeira página outra pessoa teria que virá-la para a efetiva comunicação. Algo extremamente demorado e desgastante!  </p>
           <p>Surge então a Pecto, uma plataforma completa que promove um ambiente completo denominado “cardteca” onde tem vários cards separados por contextos. O usuário ao clicar no card, a ferramenta pronuncia o card, colaborando com o processo de comunicação e dando voz aqueles que não falam.  </p>
           <div className={style.imgPai}>
                <img src={app} alt="imagem da plataforma da Pecto" />
           </div>
        </section>
    )
}

export default Sobre