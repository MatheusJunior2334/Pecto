import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import style from './Demo.module.scss';

import HomeDemo from './HomeDemo';
import Formalidade from './Formalidade';
import Desejos from './Desejos';
import Sentimentos from './Sentimentos';
import Pessoa from './Pessoa';


//Imagens gerais da página

import logo from '../Home/Images/LogoPecto.png';
import home from '../../Images/Home_demo.png';
import cards_demo from '../../Images/Cards_demo.png';
import seta2 from '../../Images/Seta2_demo.png';
import seta from '../../Images/Seta_demo.png';
import lupa from '../../Images/Search_lupa.png';
import conta from '../../Images/Login_conta_demo.png';

const Demo = () => {

    //Script para tornar o Menu Lateral, a Header e a Main (style.main) funcionais e móveis

    const [menuLateralVisible, setMenuLateralVisible] = useState(false);
    const [mainVisible, setMainVisible] = useState(false);
    const [headerVisible, setHeaderVisible] = useState(false);

    const handleMenuClickMenu = () => {
        setMenuLateralVisible(!menuLateralVisible);
        setHeaderVisible(!headerVisible);
    }

    const handleMenuClickMain = () => {
        setMainVisible(!mainVisible);
    }

    //Toggle das Cards - Menu Lateral

    const [cardsMenu, setCardsMenu] = useState(false);

    const handleCardsMenu = () => {
        setCardsMenu(!cardsMenu);
    }

    //Código para tornar a barra de busca funcional

    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    }
    

    //Mensagem de Bom dia, Boa Tarde ou Boa Noite

    let mensagem = new Date();
    let horario = mensagem.getHours();
    let cumprimento;

    if (horario >= 6 && horario < 12) {
        cumprimento = "Bom dia!";
    } else if (horario >= 12 && horario <= 17) {
        cumprimento = "Boa tarde!";
    } else {
        cumprimento = "Boa noite!";
    }


    //Função para os audios das cards

    const [currentAudio, setCurrentAudio] = useState(null);

    const handleCardAudio = (audioSrc) => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        const card_audio = new Audio(audioSrc);
        setCurrentAudio(card_audio);
        card_audio.play();
    }

    //Constante para a troca de áudios

    const [selectedVoice, setSelectedVoice] = useState('Mileny');

    const toggleVoice = (voice) => {
        setSelectedVoice(voice);
    }
    

    //Código para trocar de página das Cards

    const [selectedContainer, setSelectedContainer] = useState('HomeDemo');

    const handleLabelClick = (component) => {
        setSelectedContainer(component);
    }

    let componentToRender;

    switch (selectedContainer) {
        case 'HomeDemo':
            componentToRender = <HomeDemo searchText={searchText} handleCardAudio={handleCardAudio} selectedVoice={selectedVoice} />;
            break;

        case 'Formalidade':
            componentToRender = <Formalidade searchText={searchText} handleCardAudio={handleCardAudio} selectedVoice={selectedVoice} />;
            break;

        case 'Desejos':
            componentToRender = <Desejos searchText={searchText} handleCardAudio={handleCardAudio} selectedVoice={selectedVoice} />
            break;

        case 'Sentimentos':
            componentToRender = <Sentimentos searchText={searchText} handleCardAudio={handleCardAudio} selectedVoice={selectedVoice} />
            break;

        case 'Pessoa':
            componentToRender = <Pessoa searchText={searchText} handleCardAudio={handleCardAudio} selectedVoice={selectedVoice} />
            break;

        default:
            componentToRender = <HomeDemo searchText={searchText} handleCardAudio={handleCardAudio} selectedVoice={selectedVoice} />
    }


    //Código JSX

    return (
        <main id={style.demo} >
            <div className={`${style.main} ${mainVisible ? style.visible : ''}`}>
            {/* ou: className={style.main + (mainVisible ? ' ' + style.visible2 : '')} */}

                {/*Menu lateral*/}
                <div className={`${style.menu_lateral} ${menuLateralVisible ? style.visible2 : ''}`}>
                <img src={logo} alt="logo Pecto" id={style.logo} />
                    <nav>
                        <ul>
                            <Nav.Link href='/' style={{textDecoration: 'none', color: '#000'}}>
                               <li>
                                    <div>
                                        <img src={home} alt="Clique aqui para ir à home" />
                                        <p>Home</p>
                                    </div>
                               </li>
                            </Nav.Link>
                            <li>

                                {/*Escolher Menu das Cards - Menu Lateral*/}

                                <div onClick={handleCardsMenu}>
                                    <img src={cards_demo} alt="Clique para ver as Cards" />
                                    <p>Cards</p>
                                    <img src={seta2} alt="Exibir temas das Cards" className={style.seta_card} style={{ transform: `${cardsMenu ? 'rotate(0deg)' : ''}` }} />
                                </div>

                                <div className={style.cards_opcoes} style={{ display: `${cardsMenu ? 'flex' : 'none'}`}}>
                                    <div onClick={() => handleLabelClick('HomeDemo')}>
                                        <p>Ver Todas</p>
                                    </div>
                                    <div onClick={() => handleLabelClick('Formalidade')}>
                                        <p>Formalidade</p>
                                    </div>
                                    <div onClick={() => handleLabelClick('Desejos')}>
                                        <p>Desejos</p>
                                    </div>
                                    <div onClick={() => handleLabelClick('Sentimentos')}>
                                        <p>Sentimentos</p>
                                    </div>
                                    <div onClick={() => handleLabelClick('Pessoa')}>
                                        <p>Pessoa</p>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        { /*Trocar de vozes - Menu Lateral*/}

                        <div className={style.troca_vozes}>
                            <h2>Trocar de Vozes</h2>
                            <div>
                                <p onClick={() => {toggleVoice('Mileny')}} style={{ color: `${selectedVoice === 'Mileny' ? '#FFF' : '#000'}` }}>Mileny</p>
                                <p onClick={() => {toggleVoice('Hitalo')}} style={{ color: `${selectedVoice === 'Hitalo' ? '#FFF' : '#000'}` }}>Hitalo</p>
                                <span style={{ left: `${selectedVoice === 'Mileny' ? '-0.5%' : '50%'}` }}></span>
                            </div>
                        </div>
                    </nav>
                </div>

                {/*Seção principal*/}
                <div id={style.section_main}>

                    {/*Header*/}
                    <header id={style.header} className={`${style.header} ${headerVisible ? style.visible2 : ''}`}>
                        <nav>
                            <img src={seta} alt='Clique para abrir o menu lateral' id={style.menu} onClick={() => {handleMenuClickMenu(); handleMenuClickMain()}} title='Ver Menu' />
                            <div id={style.nav_right}>
                                <div>
                                    <input type="search" placeholder='Procurar' value={searchText} onChange={handleSearchChange} />
                                    <img src={lupa} alt="Lupa" />
                                </div>
                                <img src={conta} alt="Clique para ver a sua conta" id={style.conta} title='Minha Conta' />
                            </div>
                        </nav>
                    </header>

                    {/*Menu Central*/}

                    <section id={style.menu_central} className={`${selectedVoice === 'Mileny' ? '' : style.imagemMenino}`}>
                        <img src={logo} alt="logo da Pecto" />
                        <h2>Se comunique com quem quiser</h2>
                        <h3>{ cumprimento }</h3>
                    </section>

                    {/*Escolher o menu a ser acessado: Home, Formalidade, Desejos ou Sentimentos*/}

                    <section id={style.escolher_menu}>
                        <div>
                            <p className={style.menu_opcoes} onClick={() => {handleLabelClick('HomeDemo')}} style={{ color: `${selectedContainer === 'HomeDemo' ? '#FFF' : ''}` }}>Home</p>
                            <p className={style.menu_opcoes} onClick={() => {handleLabelClick('Formalidade')}} style={{ color: `${selectedContainer === 'Formalidade' ? '#FFF' : ''}` }}>Formalidade</p>
                            <p className={style.menu_opcoes} onClick={() => {handleLabelClick('Desejos')}} style={{ color: `${selectedContainer === 'Desejos' ? '#FFF' : ''}` }}>Desejos</p>
                            <p className={style.menu_opcoes} onClick={() => {handleLabelClick('Sentimentos')}} style={{ color: `${selectedContainer === 'Sentimentos' ? '#FFF' : ''}` }}>Sentimentos</p>
                            <p className={style.menu_opcoes} onClick={() => {handleLabelClick('Pessoa')}} style={{ color: `${selectedContainer === 'Pessoa' ? '#FFF' : ''}` }}>Pessoa</p>
                            <span style={{ left: `${selectedContainer === 'HomeDemo' ? '0' : selectedContainer === 'Formalidade' ? '20%' : selectedContainer === 'Desejos' ? '40%' : selectedContainer === 'Sentimentos' ? '60%' : '80%'}` }}></span>
                        </div>
                    </section>
                </div>

                {/*Componente a ser Renderizado*/}

                {componentToRender}
               
            </div>

        </main>
    )
}

export default Demo