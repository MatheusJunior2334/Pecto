import style from './Section3Home.module.scss';

import CardsHome from './Images/CardsHome';
import Balaozinho2Home from './Images/Balaozinho2Home';
import CardComunicacao from './Images/CardComunicacao';
import CardAcessibilidade from './Images/CardAcessibilidade';
import menina_mae from './Images/Menina_Mãe_Home.png';

function Section3Home() {
    return (
        <section id={style.comunicacaoSection}>
            <div className={style.comunicacaoTopo}>
                <CardsHome className={style.cartasHome} />
                <h2>Comunicação humanizada e acessível</h2>
                <Balaozinho2Home />
            </div>
            <div className={style.comunicacaoInferior}>
                <div className={style.part1}>
                    <div>
                        <CardComunicacao />
                        <p>Comunique-se por cards humanizados</p>
                    </div>
                    <div>
                        <CardAcessibilidade />
                        <p>Plataforma <span>100%</span> acessível</p>
                    </div>
                </div>
                <div className={style.part2}>
                    <img src={menina_mae} alt="uma criança com a sua mãe desmonstrando o app" />
                </div>
            </div>
        </section>
    )
}

export default Section3Home