import styles from './component.module.css'

const OutlinedButton = (props) => {
  return (
    <a {...props} className={`${props.className ? props.className + ' ' : ''}${styles.button} ${styles.colored}`}>
        {props.children}
    </a>
  )
}

export default OutlinedButton