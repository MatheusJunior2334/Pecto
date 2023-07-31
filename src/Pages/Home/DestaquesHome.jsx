import { Nav } from 'react-bootstrap';

import style from './DestaquesHome.module.scss';

import post1 from './Images/post1.png';
import post2 from './Images/post2.png';
import post3 from './Images/post3.png';

function PostImage(props) {
    return (
        <Nav.Link href={props.path} style={{ textDecoration: 'none' }}>  
            <div className={style.posts_img}>
                <h3>{props.title}</h3>
                <img src={props.image} alt={props.title} />
            </div>
        </Nav.Link>
    )
}

function Section2Home() {
    const posts= [
        { path: '/Materia3', title: 'Fala e Comunicação', image: post1 },
        { path: '/Materia2', title: 'Tecnologia como ferramenta de inclusão para PCDs', image: post2 },
        { path: '/Materia1', title: 'PCDs ainda enfrentam difícil inclusão na educação pública', image: post3 }
    ]

    return (
        <section id={style.destaques}>
            <h2>Destaques</h2>
            <div className={style.bottomLine}></div>
            <div className={style.posts}>

                { posts.map((post, index) => (
                    <PostImage
                        key={index}
                        path={post.path}
                        title={post.title}
                        image={post.image}
                    />
                )) }
                
            </div>
        </section>
    )
}

export default Section2Home