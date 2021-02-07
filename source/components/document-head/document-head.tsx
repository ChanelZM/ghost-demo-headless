import Head from 'next/head';

export default function DocumentHead({ title }) {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            <link
                href="https://fonts.googleapis.com/css2?family=Spartan:wght@200;400;700&display=swap"
                rel="stylesheet"
            />
        </Head>
    );
}
