import Link from '../../common/Button/Link';
import styles from './component.module.css'
import texts from './texts';

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={`content ${styles.content}`}>
                <h2$aos1$>{texts.title}</h2>
                <p$aos2$>{texts.subtitle1}</p>
                <p$aos3$>{texts.subtitle2}</p>$aosspan1$
                $extratab$<Link href='https://www.google.com' >{texts.button}</Link>$aosspan2$
            </div>
        </section>
    )
}

export default Hero