import Link from '../Button/Link';
import Menu from '../Menu';
import styles from './component.module.css'
import links from './links';
import texts from './texts';

const Navbar = () => {
    return (
        <section id='navbar' className={styles.container}>
            <div className='content'>
                <a href="/" className={styles.brand}>
                    <svg className={styles.logo} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path fill='$primary$' d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" /></svg>
                    <h1>{texts.brand}</h1>
                </a>
                <nav>
                    <div className={styles.links}>
                        {links.map((link, index) => (
                            <a key={index} className={styles.link} href={link.url}>{link.text}</a>
                        ))}
                        <Link className={styles.button} href="https://google.com">{'Call To Action'}</Link>
                    </div>
                    <Menu className={styles.menu} links={links} footer={
                        <Link href="https://google.com">{'Call To Action'}</Link>
                    } />
                </nav>
            </div>
        </section>
    )
}

export default Navbar;