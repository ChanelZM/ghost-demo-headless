import $ from './recent-posts.module.scss';

export default function RecentPosts(props) {
    const { posts } = props;
    console.log(posts);
    return (
        <section className={$.wrap}>
            <h2 className={$.title}>Just in</h2>
            <div className={$.list}>
                {posts.map((post) => {
                    const { title, feature_image, excerpt, id } = post;
                    return (
                        <article key={id}>
                            <div className={$.imageWrap}>
                                <img src={feature_image} className={$.image} />
                            </div>
                            <h3 className={$.articleTitle}>
                                <a className={$.link}>{title}</a>
                            </h3>
                            <p className={$.excerpt}>{excerpt}</p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
