import Link from '../Button/Link';
import styles from './component.module.css'
import links from './links';
import texts from './texts';

const Navbar = () => {
    return (
        <section id='navbar' className={styles.container}>
            <div className='content'>
                <a href="/" className={styles.brand}>
                    <h1>{texts.brand}</h1>
                </a>
                <nav>
                    <div className={styles.links}>
                        {links.map((link, index) => (
                            <a className={styles.link} href={link.url}>{link.text}</a>
                        ))}
                        <Link href="https://google.com">{'Call To Action'}</Link>
                    </div>
                    {/* <div>[] aqui iria el boton de navegacion para mobiles</div> */}
                </nav>
            </div>
        </section>
    )
}

export default Navbar;