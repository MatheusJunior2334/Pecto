import style from './Comentario.module.scss';

import DesenhoPCD from './Images/DesenhoPCD.png';

function Comentario() {
    return (
        <section id={style.comentario_section}>
            <form action='#' className={style.comentario_part1}>
               <fieldset>
                    <h2>Deixe um comentário:</h2>
                    <p>Seu nome:</p>
                    <input type="name" name='nome' placeholder='Digite seu nome completo aqui: *' className={style.input_principal} />
                    <p>Seu e-mail:</p>
                    <input type="email" name='email' placeholder='Digite seu e-mail aqui: *' className={style.input_principal} />
                    <p>Seu comentário:</p>
                    <textarea name="comentario" className="comentario" cols="30" rows="10" placeholder='Deixe seu comentário aqui: *' />
                    <div className={style.salvar_informacao}>
                        <input type="checkbox" />
                        <label>Salvar as minhas informações para a próxima vez em que eu comentar</label>
                    </div>
                    <input type="submit" name='submit' value={'Enviar Comentário'} className={style.comentario_submit} />
               </fieldset>
            </form>
            <div className={style.comentario_part2}>
                <img src={DesenhoPCD} alt="Desenho de um pcd mexendo no celular" />
            </div>
        </section>
    )
}

export default Comentario