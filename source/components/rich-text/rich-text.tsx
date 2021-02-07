import $ from './rich-text.module.scss';

export default function RichText({ content }) {
    return (
        <div className={$.wrap} dangerouslySetInnerHTML={{ __html: content }} />
    );
}
