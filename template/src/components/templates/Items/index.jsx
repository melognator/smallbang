import styles from './component.module.css'
import items from './items';
import texts from './texts';

const Items = () => {
    return (
        <>
            <a className='anchor' id='items' href='#'></a>
            <section>
                <div className={`content`}>
                    <h2 className='title-margin center'>{texts.title}</h2>
                    {/* <Button>Agendar</Button> */}
                    <div className={styles.items}>
                        {items.map((item, index) => (
                            <article key={index}>
                                <img src={item.image} alt={item.alt} />
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Items