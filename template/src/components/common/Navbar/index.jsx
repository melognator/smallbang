import Link from '../Button/Link';
import styles from './component.module.css'
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
                        <a className={styles.link} href="#">{texts.links.home}</a>
                        $sections$
                        <Link href="https://google.com">{'Call To Action'}</Link>
                    </div>
                    {/* <div>[] aqui iria el boton de navegacion para mobiles</div> */}
                </nav>
            </div>
        </section>
    )
}

export default Navbar;