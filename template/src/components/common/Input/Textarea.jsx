import styles from './component.module.css'

const Textarea = (props) => {
  return (
    <span className={styles.inputContainer}>
        <textarea {...props} className={`${props.className} ${styles.input}`}>
            {props.children}
        </textarea>
    </span>
  )
}

export default Textarea