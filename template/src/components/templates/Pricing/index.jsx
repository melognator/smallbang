import Button from '../../common/Button/Button';
import styles from './component.module.css'
import pricings from './pricings';
import texts from './texts';

const Pricing = () => {
    return (
        <>
            <a className='anchor' id='pricing' href='#'></a>
            <section>
                <div className={`content center`}>
                    <h2 className='title-margin'>{texts.title}</h2>
                    <div className={styles.pricings}>
                        {pricings.map((pricing, index) => (
                            <article key={index}>
                                {pricing.tag && <span className={styles.tag}>{pricing.tag}</span>}
                                <section className={styles.pricingHeader}>
                                    <h3>{pricing.title}</h3>
                                    <p>{pricing.description}</p>
                                    <p className={styles.price}>{pricing.price}</p>
                                </section>
                                <ul>
                                    {pricing.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                                <Button onClick={''}>{texts.buttonText}</Button>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing