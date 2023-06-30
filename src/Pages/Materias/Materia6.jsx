import HeaderBlog from '../Home/HeaderBlog';
import MainMateria from './MainMateria';
import Newsletter from '../Blog/Newsletter';
import FooterBlog from '../Home/FooterBlog';

import logo_blog from '../../Images/Logo_Header_Blog.png';
import crianças from '../../Images/crianças.jpeg';

function Materia6() {
    return (
        <div>
            <HeaderBlog header_color='#d2f2ff' header_img={logo_blog} />
                        <MainMateria titulo_materia='Exclusão e falta de acessibilidade afeta estudantes surdos' tema_materia='Acessibilidade' tema_cor='#005BBB' cor_fonte='#fff' materia_img={crianças} publicacao_materia='07/05/2022' materia_texto={['O levantamento realizado pelo Instituto Brasiliero de Geografia e Estatística (IBGE), publicado no ano de 2021, mostra que cerca de 2,3 milhões de pessoas possuem algum grau de surdez. Apesar de existir Língua Brasileira de Sinais (Libras), a maior parte da população brasileira surda não sabe utilizá-la. De acordo com a Pesquisa Nacional de Saúde (PNS), entre os que têm alguma dificuldade auditiva, apenas 1,8% sabe usar a Libras, entre os que têm deficiência auditiva moderada, apenas 3%. Foram consultadas pessoas com deficiência auditiva com mais de 5 anos. Um estudo realizado pelo Instituto Locomotiva e a Semana da Acessibilidade Surda, em 2019, cerca 32% dos surdos não têm instrução e apenas 7% possuem ensino superior completo. Estes números podem estar ligados à falta de acessibilidade e inclusão de alunos surdos nas escolas.','A intérprete de Libras Thais Fernanda Kuka explica que a falta de intérpretes formados afeta na educação de alunos com deficiência auditiva, além de muitos não terem acesso a  Libras para se comunicarem em uma sala de aula. “Como muitos alunos surdos não têm acesso a Libras, irão procurar por outros mecanismos para se sentirem incluídos”. De acordo com a intérprete, o aluno surdo passa a optar pela leitura labial ou pelo aparelho auditivo. Thais relata que a  falta de aceitação no ambiente escolar e na sociedade pode causar um bloqueio na interação dos surdos com outras pessoas. Ela cita como exemplo duas crianças que acompanhou, uma delas foi inserida em grupos sociais dentro e fora da escola; a outra não conseguia se aproximar de outros jovens, pois se sentia insegura ao se comunicar.Para a intérprete, a busca pela inserção rápida da pessoa surda tende a levar ao uso de aparelho auditivo ou de leitura labial, mas isso afeta a identidade dela. "A falta de conhecimento na comunidade prejudica o surdo. A família ao invés de procurar a aceitação, irá propor outras alternativas que se tornam um obstáculo no amadurecimento do surdo", ressalta. ','Em Ponta Grossa, sete colégios da rede estadual oferecem intérpretes de Libras. A Escola CEEBJA Prof. Paschoal Salles Rosa tem sete alunos surdos. A intérprete de Libras Alessandra Liz Ferreira aponta que a presença de intérpretes para acompanhar os surdos é essencial para a mediação da comunicação, informação e o direito à acessibilidade linguística. "Historicamente, eram poucos surdos presentes nas salas de aula, por isso a presença do intérprete é uma vitória que precisa se manter para consolidar o lugar de surdos em ambientes escolares", destaca. Segundo Alessandra, os professores buscam formas de adaptar as aulas para atender esses alunos, além dos colegas e funcionários que também encontram formas de se comunicar. "Eu vou sempre mediando as conversas entre ele e outros colegas e funcionários", explica. O estudante José Guilherme de Lima, que estuda na Escola CEEBJA Prof. Paschoal Salles Rosa explica que nos primeiros anos de estudos não havia acessibilidade nas escolas. "Tive algumas dificuldades no ensino regular, principalmente na língua portuguesa. Porém, no CEEBJA estou conseguindo me desenvolver". Em relação à interação com outros estudantes, ele fala que mantém uma boa convivência, outros alunos utilizam a Libras para se comunicarem com ele.',, 'Fonte: periodico.sites.uepg']}/>
            

            <Newsletter />
            <FooterBlog footer_img={logo_blog} />
        </div>
    )
}

export default Materia6