import Header from '../../Home/Header';
import MainMateria from './MainMateria';
import Newsletter from '../Newsletter';
import Footer from '../../Home/Footer';

import logo_blog from '../../Home/Images/LogoPectoBlog.png';
import Materia1_img from '../Images/Menina PCD_img2.png';

function Materia5() {
    return (
        <div>
            <Header header_color='#d2f2ff' header_img={logo_blog} />

                <MainMateria titulo_materia='Tecnologia como uma ferramenta de inclusão para PCD' tema_materia='Dificuldade' tema_cor='#005BBB' cor_fonte='#fff' materia_img={Materia1_img} publicacao_materia='07/05/2022' materia_texto= {['Há deficiências cujos comprometimentos associados consistem em restrição ou ausência de expressão verbal. A associação entre essa condição e a falta de estratégias alternativas de comunicação acarretam exclusão dentro e fora do ambiente educacional. Para responder a essas situações, há um diversificado conjunto de recursos e estratégias alternativos de comunicação, chamados de comunicação alternativa (CA). O Fique por dentro desta semana aborda brevemente as dificuldades de expressão verbal e a importância da comunicação alternativa para responder a elas. Outras postagens se aterão aos recursos propriamente ditos e à sua utilização.', 'Como já mencionado, a CA se destina a pessoas com ausência ou defasagem na expressão verbal, isto é, que não falam ou não conseguem falar ou escrever de maneira compreensível. Muitas pessoas com essa característica desenvolvem algumas estratégias próprias de comunicação, compreendidas pelas pessoas que lhe são próximas, mas em geral podem estar sujeitas à privação de trocas comunicativas mais amplas e elaboradas. As dificuldades de expressão verbal podem decorrer de fatores neurológicos, cognitivos, emocionais ou físicos. Assim, podem ser público alvo dos recursos de CA alunos com deficiências físicas que acarretem dificuldades de fala, com paralisia cerebral, com deficiência intelectual, surdos, surdocegos, com síndromes ligadas a transtornos invasivos de comportamento, disléxicos, com dificuldades específicas na leitura, etc.','Os recursos de comunicação alternativa também são chamados de recursos de comunicação alternativa e aumentativa (CAA), comunicação ampliada e alternativa, comunicação suplementar e alternativa (CSA) ou simplesmente comunicação alternativa, designação adotada neste texto.A comunicação alternativa pode ocorrer:','Sem auxílios externos: através de possibilidades alternativas de expressão da própria pessoa, como emissão de sons, gestos, expressões corporais e faciais. As línguas de sinais também são modos de comunicação alternativa.','Com auxílios externos: através da associação das possibilidades do próprio usuário a recursos como a escrita, nos casos de defasagem na fala. Ampliando essas alternativas, existem recursos especificamente desenvolvidos para promover comunicação alternativa, que podem ser de baixa ou alta tecnologia.', 'Fonte: IFPB' ]}/>

            <Newsletter />
            <Footer footer_img={logo_blog} />
        </div>
    )
}

export default Materia5