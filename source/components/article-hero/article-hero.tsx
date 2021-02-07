import $ from './article-hero.module.scss';

export default function ArticleHero(props) {
    const { title, imageUrl } = props;

    return (
        <header className={$.wrap}>
            <h1 className={$.title}>{title}</h1>
            <div className={$.imageWrap}>
                <img src={imageUrl} className={$.image} />
            </div>
        </header>
    );
}
