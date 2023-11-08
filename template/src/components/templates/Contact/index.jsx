import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import Textarea from '../../common/Input/Textarea';
import styles from './component.module.css'
import texts from './texts';

const Contact = () => {
    return (
        <>
            <a className='anchor' id='contact' href='#'></a>
            <section>
                <div className={`content center`}>
                    <form className={styles.form}>
                        <h2>{texts.title}</h2>
                        <article>
                            <label htmlFor='email'>{texts.emailLabel}</label>
                            <Input type='email' id='email' name='email' />
                        </article>
                        <article>
                            <label htmlFor='name'>{texts.nameLabel}</label>
                            <Input type='text' id='name' name='name' />
                        </article>
                        <article>
                            <label htmlFor='message'>{texts.messageLabel}</label>
                            <Textarea id='message' name='message' />
                        </article>
                        <Button type='submit'>{texts.button}</Button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact