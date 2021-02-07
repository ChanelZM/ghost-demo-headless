import api from './api';

export async function getAllPosts() {
    const posts = await api.posts
        .browse({
            limit: 'all',
        })
        .catch((err) => console.error(err));
    return posts.filter((post) => post.featured !== true);
}

export async function getFeaturedPost() {
    const posts = await api.posts
        .browse({
            limit: 'all',
        })
        .catch((err) => console.error(err));
    return posts.filter((post) => post.featured === true)[0];
}
