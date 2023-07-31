import React from 'react';
import { Nav } from 'react-bootstrap';
import style from './Blog.module.scss';

import Header from '../Home/Header';
import InitialSectionBlog from './InitialSectionBlog';
import ArticleModelBlog from './ArticleModelBlog';
import Newsletter from './Newsletter';
import Footer from '../Home/Footer';

import logo_blog from '../Home/Images/LogoPectoBlog.png';
import Blog_PCD1 from './Images/Blog_PCD1.png'
import Blog_PCD2 from './Images/Blog_PCD2.png';
import Blog_PCD3 from './Images/Blog_PCD3.png';
import Menina_PCD1 from './Images/Menina PCD_img1(2).png';
import Menina_PCD2 from './Images/Menina PCD_img2.png';
import crianças from './Images/crianças.jpeg'

function Blog() {
    let inclusaoThemeColor = '#005BBB';
    let comportamentoThemeColor = '#FF9800';

    let colorText1 = '#FFF';
    let colorText2 = '#000';

    const articleInfo = [
        { link: '/Materia1', blogImg: Blog_PCD1, themeColor: inclusaoThemeColor, textColor: colorText1, themeTitle: 'Inclusão', articleTitle: 'PCDs ainda enfrentam difícil inclusão educação pública' },
        { link: '/Materia2', blogImg: Blog_PCD2, themeColor: inclusaoThemeColor, textColor: colorText1, themeTitle: 'Tecnologia', articleTitle: 'Tecnologia como uma ferramenta de inclusão para PCD' },
        { link: '/Materia3', blogImg: Blog_PCD3, themeColor: inclusaoThemeColor, textColor: colorText1, themeTitle: 'Comunicação', articleTitle: 'Fala e comunicação' },
        { link: '/Materia4', blogImg: Menina_PCD1, themeColor: comportamentoThemeColor, textColor: colorText2, themeTitle: 'Comportamento', articleTitle: 'Dificuldades enfrentadas por pais de crianças com deficiência' },
        { link: '/Materia5', blogImg: Menina_PCD2, themeColor: comportamentoThemeColor, textColor: colorText2, themeTitle: 'Dificuldade', articleTitle: 'Deficiência e dificuldades de expressão verbal: alternativas para promover a comunicação' },
        { link: '/Materia6', blogImg: crianças, themeColor: comportamentoThemeColor, textColor: colorText2, themeTitle: 'Acessibilidade', articleTitle: 'Exclusão e falta de acessibilidade afeta estudantes surdos' }
    ]

    return (
        <main>
            <Header header_color='rgba(255, 255, 255, 0.95)' header_img={logo_blog} />
            <InitialSectionBlog /> 
                
            <section id={style.section_blog}>

                { articleInfo.map((article, index) => (
                    <Nav.Link key={index} href={article.link} style={{textDecoration: 'none'}}>
                        <ArticleModelBlog
                            blogImg={article.blogImg}
                            themeColor={article.themeColor}
                            textColor={article.textColor}
                            themeTitle={article.themeTitle}
                            articleTitle={article.articleTitle}
                        />
                    </Nav.Link>
                )) }

            </section>
            <Newsletter />
            <Footer footer_img={logo_blog} />
        </main>
    )
}

export default Blog