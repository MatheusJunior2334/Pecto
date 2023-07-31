import styles from './Planos.module.scss';
import DisponivelImage from './Images/DisponivelImage';
import IndisponivelImage from './Images/IndisponivelImage';


const PlanosProps = ({cor, tipoPlano, descricao, valor, disponiveis, indisponiveis, botao}) => {

    return (
        <div className={styles.planoType} style={{borderColor: cor}}>

            <div className={styles.part1} style={{borderColor: cor}}>
                <h3 style={{ color: cor }}>{tipoPlano}</h3>
                <p>{descricao}</p>
            </div>

            <div className={styles.part2} style={{borderColor: cor}}>
                <div>
                    <span style={{color: cor}}>R$</span>
                    <span style={{color: cor}}>{valor}</span>
                </div>
                <p style={{color: cor}}>por mês</p>
            </div>

            <div className={styles.part3}>
                {disponiveis.map((texto, index) => (
                    <div key={index}>
                        <DisponivelImage />
                        <label>{texto}</label>
                    </div>
                ))}
                {indisponiveis.map((texto, index) => (
                    <div key={index}>
                        <IndisponivelImage />
                        <label>{texto}</label>
                    </div>
                ))}
            </div>

            <div className={styles.part4}>
                <button style={{backgroundColor: cor}}>{botao}</button>
            </div>
        </div>
    )
}

function Planos() {

    return (
        <section id={styles.planos}>
            <h2>Escolha o seu plano</h2>

            <div className={styles.planosContainer}>
                {/*Primeiro Plano*/}
                <PlanosProps
                    cor='#008AFF'
                    tipoPlano='Demo'
                    descricao='Para pessoas que querem conhecer os nosso serviços'
                    valor='0,00'
                    disponiveis={['Cartas prontas para uso', 'Acesso à vozes pré-gravadas']}
                    indisponiveis={['Criação e personalização de cards', 'Suporte a qualquer momento', 'Personalização das vozes']}
                    botao='começar'
                />

                {/*Segundo Plano*/}
                <PlanosProps
                    cor='#008AFF'
                    tipoPlano='Plus'
                    descricao='Para pessoas que querem um gostinho a mais'
                    valor='25,00'
                    disponiveis={['Cartas prontas para uso', 'Acesso à vozes pré-gravadas','Criação e personalização de cards']}
                    indisponiveis={['Suporte a qualquer momento', 'Personalização das vozes']}
                    botao='começar'
                />

                {/*Terceiro Plano*/}
                <PlanosProps
                    cor='#FF9800'
                    tipoPlano='Premium'
                    descricao='Tenha o poder de personalizar os diferentes recursos do site'
                    valor='50,00'
                    disponiveis={['Cartas prontas para uso', 'Acesso à vozes pré-gravadas','Criação e personalização de cards','Suporte a qualquer momento', 'Personalização das vozes']}
                    indisponiveis={[]}
                    botao='acesse agora'
                />
            </div>
        </section>
    )
}

export default Planos