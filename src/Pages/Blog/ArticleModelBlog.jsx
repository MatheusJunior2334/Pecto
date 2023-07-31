import style from './ArticleModelBlog.module.scss';

function ArticleModelBlog(props) {
    return (
        <article id={style.articleModelBlog}>
            <div className={style.row_element}>
                <img src={props.blogImg} alt='Acesso a publicação' />
                <h4 style={{backgroundColor: props.themeColor, color: props.textColor}}>
                    {props.themeTitle}
                </h4>
                <p>{props.articleTitle}</p>
            </div>
        </article>
    )
}

export default ArticleModelBlog

/*style={{backgroundImage: `url(${props.blog_img1})`}}*/