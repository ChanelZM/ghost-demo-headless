import api from './api';

export async function getSettings() {
    return await api.settings.browse().catch((err) => console.error(err));
}
