import style from './Depoimentos.module.scss';

import React, { useState } from 'react';

import eleanor from './Images/eleanor_teste.jpg';
import holly from './Images/Holly Greenhow - Depoimentos.jpg';

import SetaEsquerdaIcon from './Images/SetaEsquerdaIcon';
import SetaDireitaIcon from './Images/SetaDireitaIcon';

const DepoimentoItem = ({ transform, image, name, text }) => {
    return (
        <div className={style.content} style={{transform: `translateX(${transform * 110}%)`}}>
            <div className={style.image_name}>
                <img src={image} alt={name} />
                <h3>{name}</h3>
            </div>
            <div className={style.text}>
                <p>{text}</p>
            </div>
        </div> 
    )
}


function Depoimentos() {

    //Código para tornar o carrossel funcional

    const [posicao, setPosicao] = useState(0);

    const handleClickLeft = () => {
        setPosicao((posicao - 1 + 2) % 2);
    }

    const handleClickRight = () => {
        setPosicao((posicao + 1) % 2);
    }

    //Props dos Depoimentos

    const depoimentos = [
        {
            transform: '0',
            image: eleanor, 
            name: 'Eleanor Marques', 
            text: 'Excelente! Graças à Pecto, a minha filha, que tem dificuldades para falar, está conseguindo interagir-se melhor com outras pessoas! Estou bastante feliz por ela.'
        },

        {
            transform: '1',
            image: holly, 
            name: 'Holly Greenhow', 
            text: 'Escrevo por aqui pela ajuda de meus pais. Sou profundamente grata pela iniciativa da Pecto, é tão importante conseguir me comunicar com a minha família e amigos sem depender do outro.'
        },
    ]

    //Código JSX

    return (
        <section id={style.depoimentos}>
            <h2>Depoimentos</h2>
            <div className={style.container}>

                 {/*Botão Esquerdo*/}

                <div className={style.button_left}>
                    <SetaEsquerdaIcon handleClickLeft={handleClickLeft} />
                </div>

                {/*Depoimentos*/}

                {depoimentos.map((depoimento, index) => (
                    <div className={style.box} style={{ transform: `translateX(${posicao * -110}%)`}} key={index}>
                        <DepoimentoItem
                            transform={depoimento.transform}
                            image={depoimento.image}
                            name={depoimento.name}
                            text={depoimento.text}
                        />
                    </div>
                ))}

                {/*Botão Direito*/}

                <div className={style.button_right}>
                    <SetaDireitaIcon handleClickRight={handleClickRight} />
                </div>
            </div>
        </section>
    )
}

export default Depoimentos