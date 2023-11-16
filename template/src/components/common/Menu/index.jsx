import styles from './component.module.css';
import { faAngleRight, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from 'react';

const Menu = ({links = [], footer, className}) => {

    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        setShowMenu(true)
    }

    const closeMenu = () => {
        setShowMenu(false)
    }

    return (
        <div className={className}>
            <button className={styles.button} onClick={openMenu} title='Open menu'>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div className={`${styles.popup} ${showMenu ? styles.showPopup : ''}`}>
                <div onClick={closeMenu} className={`${styles.backdrop} ${showMenu ? styles.showBackdrop : ''}`}>

                </div>
                <div className={`${styles.menu} ${showMenu ? styles.showMenu : ''}`}>
                    <section className={styles.menuHeader}>
                        <button title='Close menu' className={styles.button} onClick={closeMenu}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </section>
                    <section className={styles.menuBody}>
                        {links.map((link, index) => (
                            <a key={index} onClick={closeMenu} className={styles.link} href={link.url}>{link.text}</a>
                        ))}
                    </section>
                    <section className={styles.menuFooter}>
                        {footer}
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Menu