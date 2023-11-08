import styles from './component.module.css'

const Input = (props) => {
  return (
    <span className={styles.inputContainer}>
        <input {...props} className={`${props.className} ${styles.input}`}>
            {props.children}
        </input>
    </span>
  )
}

export default Input