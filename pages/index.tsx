import { useEffect, useState } from 'react';
import { getAllPosts, getFeaturedPost, getSettings } from '../services';
import {
    RecentPosts,
    FeaturedPost,
    Navigation,
    DocumentHead,
} from '../source/components';

export default function Home() {
    const [posts, setPosts] = useState<null | any[]>(null);
    const [featuredPost, setFeaturedPost] = useState<null | any>(null);
    const [settings, setSettings] = useState(null);

    useEffect(() => {
        const allPosts = async () => {
            const posts = await getAllPosts();
            setPosts(posts);
        };
        const featuredPost = async () => {
            const post = await getFeaturedPost();
            setFeaturedPost(post);
        };
        const settings = async () => {
            const retrievedSettings = await getSettings();
            setSettings(retrievedSettings);
        };
        allPosts();
        featuredPost();
        settings();
    }, []);

    return (
        <>
            <DocumentHead title="Chanel's blog" />
            {settings && (
                <Navigation
                    logoUrl={settings.logo}
                    baseUrl={settings.url}
                    title={settings.title}
                    navigation={settings.navigation}
                />
            )}
            <main>
                {featuredPost && (
                    <FeaturedPost
                        title={featuredPost.title}
                        excerpt={featuredPost.excerpt}
                        imgUrl={featuredPost.feature_image}
                        url={featuredPost.url}
                    />
                )}
                {posts && <RecentPosts posts={posts.slice(0, 5)} />}
            </main>
        </>
    );
}
