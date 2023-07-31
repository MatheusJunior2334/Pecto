import style from './InitialSectionBlog.module.scss';

function InitialSectionBlog() {
    return (
        <section id={style.initialSectionBlog}>
           <div>
            <h2>Comportamento</h2>
            <p>Dificuldades enfrentadas por pais e mães de crianças com deficiência</p>
            <button>Ver matéria</button>
           </div>
        </section>
    )
}

export default InitialSectionBlog