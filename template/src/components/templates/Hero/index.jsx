import Link from '../../common/Button/Link';
import styles from './component.module.css'
import texts from './texts';

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={`content ${styles.content}`}>
                <h2>{texts.title}</h2>
                <p>{texts.subtitle1}</p>
                <p>{texts.subtitle2}</p>
                <Link href='https://www.google.com' >{texts.button}</Link>
            </div>
        </section>
    )
}

export default Hero