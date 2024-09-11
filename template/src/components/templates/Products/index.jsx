import Link from '../../common/Button/Link';
import styles from './component.module.css'
import texts from './texts';
import items from './items';

const Products = () => {
    return (
        <>
            <a className='anchor' id='extra' href='#'></a>
            <section>
                <div className={`content ${styles.content}`}>
                    <h2>{texts.title}</h2>
                    <div className={styles.items}>
                        {items.map((item, index) => (
                            <article key={index}>
                                <img src={item.image} alt={item.alt} />
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <p className={styles.price}>$ {item.price}</p>
                                <Link href={item.href} className={styles.button}>{texts.button}</Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products