import GhostContentAPI from '@tryghost/content-api';

// Create API instance with site credentials
// @ts-ignore
const api = new GhostContentAPI({
    url: 'http://localhost:2368',
    key: process.env.API_KEY,
    version: 'v3',
});

export default api;
