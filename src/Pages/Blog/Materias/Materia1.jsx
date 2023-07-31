import Header from '../../Home/Header';
import MainMateria from './MainMateria';
import Newsletter from '../Newsletter';
import Footer from '../../Home/Footer';

import logo_blog from '../../Home/Images/LogoPectoBlog.png';
import Materia1_img from '../Images/Blog_PCD1.png';

function Materia1() {
    return (
        <div>
            <Header header_color='#d2f2ff' header_img={logo_blog} />
                <MainMateria titulo_materia='PCDs ainda enfrentam difícil inclusão educação pública' tema_materia='Inclusão' tema_cor='#005BBB' cor_fonte='#fff' materia_img={Materia1_img} publicacao_materia='07/05/2022' materia_texto={['A análise dos dados sobre educação indica que a maioria das crianças e jovens com deficiência não frequenta ou não frequentou a escola. O percentual de 17% de frequentadores sugere os passos a serem dados em prol de uma escola que realmente inclua PCDs.Tanto a Constituição Federal quanto a Convenção Sobre os Direitos da Pessoa com Deficiência garantem o direito de todos a uma educação inclusiva, na qual os estudantes compartilham o mesmo ambiente escolar. Entretanto, alunos com deficiência ainda sofrem com a falta de adaptação.','A pedagoga Girleide da Silva Braga, 55 anos, que trabalha com educação especial na Secretaria de Educação do Distrito Federal, lista alguns pontos que confirmam a baixa inclusão e alta taxa de evasão entre as PCDs. Dificuldade de chegar à escola (ônibus adaptados e acessos nas proximidades da escola e das residências); falta de investimento em tecnologia (materiais apropriados e qualificação profissional); ausência de acompanhamento educacional integrado; falta de acompanhamento do aluno junto a outros órgãos; e falta de profissionais qualificados são alguns deles.Segundo a pedagoga, as escolas regulares não estão preparadas para atender crianças com deficiência, o que é um dos motivos da alta evasão escolar desse público. As escolas precisam estar mais preparadas, e não só ter um professor para atuar com esse aluno. Toda a rede tinha que ter outro preparo. Então, o que tem acontecido muito é essas crianças ficarem sozinhas num canto, sendo só mais um número. ','Assim, ela vai perdendo o gosto por estudar", esclarece a professora. Segundo os dados do Olga Kos, embora tenha sido identificada uma ampliação do acesso, persistem problemas para a superação de barreiras físicas e arquitetônicas. De acordo com o estudo, os fatores que dificultam o acesso e a permanência na escola estão associados ao transporte escolar em 32% dos casos. Em seguida, aparecem a falta ou carência de acompanhante (25%), a infraestrutura escolar e acesso da escola (22%) e a distância da instituição (20%).Tomando por base o nível de escolarização, a sondagem identificou que, nas pessoas com 18 anos ou mais com deficiência, o índice da população com nível superior completo era de 5%, contra 17% das pessoas sem deficiência. Dados de 2021 do Instituto Brasileiro de Geografia e Estatística (IBGE) mostram que apenas 16,6% da população brasileira com deficiência possui ensino médio completo ou superior incompleto, e que 67,6% não têm instrução ou ensino fundamental incompleto.','Fonte: correiobraziliense']} />
            <Newsletter />
            <Footer footer_img={logo_blog} />
        </div>
    )
}

export default Materia1