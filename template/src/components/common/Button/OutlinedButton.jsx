import styles from './component.module.css'

const OutlinedButton = (props) => {
  return (
    <button {...props} className={`${props.className ? props.className + ' ' : ''}${styles.button} ${styles.outlined}`}>
        {props.children}
    </button>
  )
}

export default OutlinedButton