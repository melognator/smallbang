import styles from './component.module.css'

const OutlinedButton = (props) => {
  return (
    <button {...props} className={`${props.className ? props.className + ' ' : ''}${styles.button} ${styles.colored}`}>
        {props.children}
    </button>
  )
}

export default OutlinedButton