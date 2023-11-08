import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ColoredLink from '../../common/Button/ColoredLink';
import styles from './component.module.css'
import texts from './texts';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';

const Footer = () => {
    return (
        <>
            <a className='anchor' id='footer' href='#'></a>
            <section className={`colored-section ${styles.container}`}>
                
                <div className={`content ${styles.content}`}>
                    <section className={styles.left}>
                        <h2>{texts.title}</h2>
                        <p>{texts.description}</p>
                        <ColoredLink>{texts.button}</ColoredLink>
                    </section>
                    <section className={styles.right}>
                        <div className={styles.socials}>
                            <a target='_blank' href='https://twitter.com'><FontAwesomeIcon icon={faXTwitter} /></a>
                            <a target='_blank' href='https://facebook.com'><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a target='_blank' href='https://instagram.com'><FontAwesomeIcon icon={faInstagram} /></a>
                            <a target='_blank' href='https://linkedin.com'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a target='_blank' href='mailto:example@example.com'><FontAwesomeIcon icon={faEnvelope} /></a>
                        </div>
                        <p>{texts.copy}</p>
                    </section>
                </div>
                <div className={styles.footer}>
                    <p>Created with <a href='https://www.npmjs.com/package/smallbang?activeTab=readme'>smallbang</a></p>
                    <a href='#top'>Back to top</a>
                </div>
            </section>
        </>
    )
}

export default Footer