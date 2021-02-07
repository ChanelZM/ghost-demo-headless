import { useEffect, useState } from 'react';
import { getPage, getSettings } from '../services';
import {
    DocumentHead,
    ArticleHero,
    Navigation,
    RichText,
} from '../source/components';

export default function About() {
    const [about, setAbout] = useState<null | any>(null);
    const [settings, setSettings] = useState<null | any>(null);

    useEffect(() => {
        const getAbout = async () => {
            const aboutPage = await getPage('about');
            console.log(aboutPage);
            setAbout(aboutPage);
        };
        const settings = async () => {
            const retrievedSettings = await getSettings();
            setSettings(retrievedSettings);
        };
        getAbout();
        settings();
    }, []);
    return (
        <>
            <DocumentHead title={settings?.title || 'About'} />
            {settings && (
                <Navigation
                    logoUrl={settings.logo}
                    baseUrl={settings.url}
                    title={settings.title}
                    navigation={settings.navigation}
                />
            )}
            {about && (
                <>
                    <ArticleHero
                        title={about.title}
                        imageUrl={about.feature_image}
                    />
                    <main>
                        <RichText content={about.html} />
                    </main>
                </>
            )}
        </>
    );
}
