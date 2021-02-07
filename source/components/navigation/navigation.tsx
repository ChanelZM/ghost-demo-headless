import $ from './navigation.module.scss';

export default function Navigation(props) {
    const { logoUrl, baseUrl, title, navigation } = props;
    return (
        <header>
            <nav className={$.container}>
                <a className={$.logo} href={baseUrl}>
                    <img className={$.logoImg} src={logoUrl} alt={title} />
                </a>
                <ul className={$.list}>
                    {navigation.map((item) => {
                        const { label, url } = item;

                        return (
                            <li className={$.item}>
                                <a href={url} className={$.link}>
                                    {label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
