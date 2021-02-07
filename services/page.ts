import api from './api';

export async function getPage(slug) {
    return await api.pages
        .read({
            slug,
        })
        .catch((err) => console.error(err));
}
