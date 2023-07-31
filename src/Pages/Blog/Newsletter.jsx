import styles from './Newsletter.module.scss';

function Newsletter() {
    return (
        <section id={styles.newsletter}>
            <div className={styles.content}>
                <div className={styles.newsletterOptions}>
                    <h2>INSCREVA-SE</h2>
                    <h3>E RECEBA AS NOSSAS <br /> NOVIDADES DE ANTEMÃO</h3>
                </div>
                <div className={styles.newsletterOptions}>
                    <h5>Seu nome:</h5>
                    <input type="name" name='name' placeholder='Digite seu nome completo:' tabIndex={1} className={styles.input_type1} />
                    <h5>Seu e-mail:</h5>
                    <input type="email" name='email' placeholder='Digite seu e-mail aqui:' tabIndex={2} className={styles.input_type1} />
                    <input type="submit" name='submit' value={'ASSINAR NEWSLETTER'} tabIndex={3} className={styles.input_type2} />
                </div>
            </div>
        </section>
    )
}

export default Newsletter