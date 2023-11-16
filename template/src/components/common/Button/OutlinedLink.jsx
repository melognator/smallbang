import styles from './component.module.css'

const OutlinedButton = (props) => {
  return (
    <a {...props} className={`${props.className ? props.className + ' ' : ''}${styles.button} ${styles.outlined}`}>
        {props.children}
    </a>
  )
}

export default OutlinedButton