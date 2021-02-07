import $ from './featured-post.module.scss';

export default function FeaturedPost(props) {
    const { title, excerpt, imgUrl, url } = props;
    return (
        <section className={$.wrap}>
            <h2 className={$.title}>Featured</h2>
            <article className={$.article}>
                <img className={$.img} src={imgUrl} />
                <div className={$.content}>
                    <h3 className={$.subtitle}>
                        <a href={url} className={$.link}>
                            {title}
                        </a>
                    </h3>
                    <p className={$.excerpt}>{excerpt}</p>
                    <span className={$.fakeButton}>Read more</span>
                </div>
            </article>
        </section>
    );
}
