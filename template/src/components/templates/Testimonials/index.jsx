import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './component.module.css'
import testimonials from './testimonials';
import texts from './texts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Testimonials = () => {
    return (
        <section>
            <div className={`content center`}>
                <a className='anchor' id='information' href='#'></a>
                <h2 className='title-margin'>{texts.title}</h2>
                <div className={styles.testimonials}>
                    {testimonials.map((testimonial, index) => (
                        <article key={index}>
                            <section className={styles.testimonialHeader}>
                                <img src={testimonial.image} alt={testimonial.name} />
                                <div>
                                    <h3>{testimonial.name}</h3>
                                    <p>{testimonial.title}</p>
                                </div>
                            </section>
                            <p>“ {testimonial.quote} ”</p>
                            <section className={styles.stars}>
                                {[...Array(testimonial.stars)].map((_, index) => (
                                    <FontAwesomeIcon key={index} icon={faStar} />
                                ))}
                            </section>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials