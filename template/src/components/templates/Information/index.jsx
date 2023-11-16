import ColoredLink from '../../common/Button/ColoredLink';
import Link from '../../common/Button/Link';
import styles from './component.module.css'
import texts from './texts';

const Information = () => {
    const colored = true
    return (
        <>
            <a className='anchor' id='information' href='#'></a>
            <section className={colored ? 'colored-section' : ''}>
                <div className={`content center ${styles.content}`}>
                    <h2>{texts.title}</h2>
                    <p$aos1$>{texts.description}</p>$aosspan1$
                    $extratab${colored ? (
                        $extratab$<ColoredLink href='https://www.google.com'>{texts.button}</ColoredLink>
                    $extratab$) : (
                        $extratab$<Link href='https://www.google.com'>{texts.button}</Link>
                    $extratab$)}$aosspan2$
                </div>
            </section>
        </>
    )
}

export default Information