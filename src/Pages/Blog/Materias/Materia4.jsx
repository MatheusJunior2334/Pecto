import Header from '../../Home/Header';
import MainMateria from './MainMateria';
import Newsletter from '../Newsletter';
import Footer from '../../Home/Footer';

import logo_blog from '../../Home/Images/LogoPectoBlog.png';
import Materia4_img from '../Images/Materia4.png';

function Materia4() {
    return (
        <div>
            <Header header_color='#FCE5C2' header_img={logo_blog} />
            <MainMateria titulo_materia='Dificuldades enfrentadas por pais e mães de crianças com deficiência' tema_materia='Comportamento' tema_cor='#FF9800' cor_fonte='#000000' materia_img={Materia4_img} publicacao_materia='07/05/2022' materia_texto= {['Pais e mães desde já cedo enfrentam dificuldades para criar os seus filhos, mas para aqueles que tem filhos com algum tipo de deficiência essa atenção deve estar muito mais presente e ser mais atencioso(a). Mas quais são essas dificuldades e como os pais podem trabalhar para enfrenta-las da melhor maneira possível? Acompanhe a seguir:','Ao abordarmos as dificuldades enfrentadas por crianças com deficiência em nosso país, vem sempre à tona a necessidade de oferecermos as melhores terapias e acesso à inovações da reabilitação infantil. Mas, e as mães? Elas também precisam de atenção! A luta que essas mulheres travam diariamente nos cuidados com seus filhos com deficiência, inclusive para superação do preconceito da sociedade, é de tirar o chapéu!Pesquisa Nacional de Saúde (PNS), divulgada pelo IBGE em 2021, revelou que há no Brasil 17,3 milhões de pessoas acima de dois anos de idade com algum tipo de deficiência, o que corresponde a 8,4% da população.' ,' Segundo essa mesma pesquisa, dois em cada três brasileiros adultos PcDs – ou 67% deles – não frequentaram a escola ou têm o ensino fundamental incompleto. Isso acontece, na maioria dos casos, porque as mães de crianças com algum tipo de deficiência ainda sofrem inúmeras barreiras à inclusão educacional de seus filhos, justificadas pela falta de estrutura escolar, pessoal treinado ou pedagogia adequada. Além disso, mães de PcDs enfrentam a escassez de vagas adequadas no sistema educacional e terapêutico. Deste modo, ficam com a total incumbência de cuidar dos filhos e, consequentemente, fora do mercado de trabalho e com dificuldades financeiras.“Sem vagas nas escolas, o mercado de trabalho para essas mães fica praticamente impossível.',' Além disso, devemos acrescentar a enorme selva burocrática no sistema brasileiro de proteção social. Elas não são reconhecidas em suas necessidades e muitas sequer conseguem o Benefício de Prestação Continuada (BPC) para seus filhos – uma renda mensal bruta, por pessoa, de até 25% do valor do salário mínimo. E quando conseguem, são desestimuladas pelo INSS a entrar no mercado de trabalho para não perderem o direito a esse BPC”, explica André Naves, Defensor Público Federal especialista em inclusão social.', 'De acordo com o Defensor Público, essas mães deveriam ter também acesso a cuidados especiais com a saúde mental, já que a rotina de cuidados com filhos com deficiência ou em condição incapacitante pode ser extremamente dura e cansativa. Essas mulheres passam por muitas dificuldades como cuidadoras. Encontram obstáculos para entender o quadro clínico, o diagnóstico, para conseguir acompanhamento médico regular adequado. Dedicam muito tempo de sua vida para prestar o melhor cuidado possível e têm que realizar árduas tarefas praticamente 24 horas por dia. Por isso, também necessitam de apoio físico e mental. Muitas chegam a ter o chamado ‘estresse do cuidador’ e podem até mesmo desenvolver algum transtorno mental, como ansiedade e depressão”, conclui André Naves.', 'Fonte: mundorh']} />
            

            <Newsletter />
            <Footer footer_img={logo_blog} />
        </div>
    )
}

export default Materia4