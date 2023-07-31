import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import style from './MainMateria.module.scss';

import Comentario from '../Comentario';
import ArticleModelBlog from '../ArticleModelBlog';

import Blog_PCD1 from '../Images/Blog_PCD1.png'
import Blog_PCD2 from '../Images/Blog_PCD2.png';
import Blog_PCD3 from '../Images/Blog_PCD3.png';
import Menina_PCD1 from '../Images/Menina PCD_img1(2).png';
import Menina_PCD2 from '../Images/Menina PCD_img2.png';
import criancas from '../Images/crianças.jpeg';

import lupa from '../../../Images/Search_lupa.png';

const MainMateria = (props) => {

    //Informações das Matérias

    const articleInformations = [
        { link: '/Materia1', blogImg: Blog_PCD1, themeColor: '#005BBB', textColor: '#FFF', themeTitle: "Inclusão", articleTitle: 'PCDs ainda enfrentam difícil inclusão educação pública' },

        { link: '/Materia2', blogImg: Blog_PCD2, themeColor: '#005BBB', textColor: '#FFF', themeTitle: "Tecnologia", articleTitle: 'Tecnologia como uma ferramenta de inclusão para PCD' },

        { link: '/Materia3', blogImg: Blog_PCD3, themeColor: '#005BBB', textColor: '#FFF', themeTitle: "Comunicação", articleTitle: 'Fala e comunicação' },

        { link: '/Materia4', blogImg: Menina_PCD1, themeColor: '#005BBB', textColor: '#FFF', themeTitle: "Comportamento", articleTitle: 'Dificuldades enfrentadas por pais de crianças com deficiência' },

        { link: '/Materia5', blogImg: Menina_PCD2, themeColor: '#005BBB', textColor: '#FFF', themeTitle: "Dificuldade", articleTitle: 'Deficiência e dificuldades de expressão verbal: alternativas para promover a comunicação' },

        { link: '/Materia6', blogImg: criancas, themeColor: '#005BBB', textColor: '#FFF', themeTitle: "Acessibidade", articleTitle: 'Exclusão e falta de acessibilidade afeta estudantes surdos' }
    ]


    //Código para tornar a barra de busca funcional

    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    }

    const filteredArticles = articleInformations.filter((articles) =>
        articles.themeTitle.toLowerCase().includes(searchText.toLowerCase())
    )


    //Código JSX Principal

    return (
        <main id={style.main_materia}>
            <section>
                <div className={style.materia_part1}>
                    <div className={style.materia_topo}>
                        <h2>{props.titulo_materia}</h2>
                        <h3 style={{backgroundColor: props.tema_cor, color: props.cor_fonte}}>{props.tema_materia}</h3>
                    </div>
                    <img src={props.materia_img} alt={props.materia_alt} />
                    <span>{props.publicacao_materia} | Pecto</span>
                    {props.materia_texto.map((texto, index) => (
                          <p key={index}>{texto}</p>
                    ))}
                </div>
                <div className={style.materia_part2}>
                    <div className={style.materia_topo}>
                        <div>
                            <input type="search" placeholder='Procurar' value={searchText} onChange={handleSearchChange} />
                            <img src={lupa} alt="Pesquisar pelo blog" className={style.lupa} />
                        </div>
                    </div>
                    <div className={style.materias}>
                        {filteredArticles.length > 0 ? (
                            filteredArticles.map((articles, index) => (
                                <Nav.Link key={index} href={articles.link} style={{ textDecoration : 'none' }}>
                                    <ArticleModelBlog
                                        blogImg={articles.blogImg}
                                        themeColor={articles.themeColor}
                                        textColor={articles.textColor}
                                        themeTitle={articles.themeTitle}
                                        articleTitle={articles.articleTitle}
                                    />
                                </Nav.Link>
                            ))
                        ) : (
                            <p>Matéria não encontrada</p>
                        )}
                    </div>
                </div>
            </section>
            <Comentario />
        </main>
    )
}

export default MainMateria