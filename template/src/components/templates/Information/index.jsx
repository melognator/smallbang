import ColoredLink from '../../common/Button/ColoredLink';
import Link from '../../common/Button/Link';
import styles from './component.module.css'
import texts from './texts';

const Information = () => {
    const colored = true
    return (
        <section className={colored ? 'colored-section' : ''}>
            <div className={`content center ${styles.content}`}>
                <a className='anchor' id='information' href='#'></a>
                <h2>{texts.title}</h2>
                <p>{texts.description}</p>
                {colored ? (
                    <ColoredLink href='https://www.google.com'>{texts.button}</ColoredLink>
                ) : (
                    <Link href='https://www.google.com'>{texts.button}</Link>
                )}
            </div>
        </section>
    )
}

export default Information