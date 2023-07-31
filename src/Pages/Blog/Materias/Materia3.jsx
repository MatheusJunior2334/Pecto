import Header from '../../Home/Header';
import MainMateria from './MainMateria';
import Newsletter from '../Newsletter';
import Footer from '../../Home/Footer';

import logo_blog from '../../Home/Images/LogoPectoBlog.png';
import Materia1_img from '../Images/Blog_PCD3.png';

function Materia3() {
    return (
        <div>
            <Header header_color='#d2f2ff' header_img={logo_blog} />
                <MainMateria titulo_materia='Tecnologia como uma ferramenta de inclusão para PCD' tema_materia='Tecnologia' tema_cor='#005BBB' cor_fonte='#fff' materia_img={Materia1_img} publicacao_materia='07/05/2022' materia_texto={['Sempre que possível, os bebês com síndrome de Down devem ser acompanhados por um fonoaudiólogo logo após o nascimento, pois a hipotonia torna a musculatura da face e da boca mais “molinha”, o que pode prejudicar a amamentação e, posteriormente, o seu desenvolvimento. A regularidade e o enfoque do trabalho realizado vão depender das necessidades dos pais e da criança em diferentes fases da vida. De modo geral, este profissional poderá tratar das seguintes questões:','– Articulação dos sons, linguagem oral, leitura e escrita;',' – Dificuldades de alimentação, como sugar, mastigar e engolir;',' – Coordenação entre as funções orais e a respiração;',' – Fortalecimento da musculatura da face e da boca.','Para estimular o desenvolvimento cognitivo e de linguagem, podem ser necessárias intervenções diferentes em cada fase da criança. No caso das crianças com síndrome de Down, a experiência clínica mostra que o desenvolvimento cognitivo é mais eficiente do que o desenvolvimento da linguagem. Além disso, durante o desenvolvimento da linguagem, as crianças começam a entender antes de conseguir se expressar com palavras, ou seja, a linguagem expressiva é mais lenta que a receptiva.Neste momento, o trabalho do fonoaudiólogo é mais para orientar pais e familiares sobre o desenvolvimento da criança, com o objetivo de fortalecer os músculos da face, além de estimular o desenvolvimento cognitivo e da linguagem. O processo só estará terminado quando a pessoa que tem síndrome de Down tiver condições para comunicar o que pensa e sente sem que haja dificuldades de compreensão, e que tenha condições de interagir e conquistar seu espaço na sociedade onde está inserida.','Quando comparamos fala, linguagem e comunicação, a fala é de longe a mais difícil para crianças com síndrome de Down. Elas entendem muito bem os conceitos de comunicação e linguagem e têm o desejo de comunicar-se desde pequenas. Por isso, a maioria é capaz de se expressar vários meses antes de estar apta a usar a fala. A maioria das crianças com síndrome de Down vai progredir até usar a fala como principal sistema de comunicação. Muitas começam a utilizar espontaneamente as palavras para se comunicar entre dois e três anos, mas, em geral, este processo é um pouco mais lento, podendo começar até os cinco anos de idade. Entretanto, muitas habilidades podem ser aprendidas precocemente durante o dia a dia da criança, preparando-a para a fala.  Na série A vida com Logan, o cartunista Flávio Soares mostra um pouco da rotina com seu filho Logan, que tem síndrome de Down. Na tirinha abaixo, o dia em que Logan fala sua primeira palavra. Apesar dos esforços do pai, o menino escolhe falar o nome de um personagem de desenho animado.','Fonte: movimentodown']}/>

            <Newsletter />
            <Footer footer_img={logo_blog} />
        </div>
    )
}

export default Materia3