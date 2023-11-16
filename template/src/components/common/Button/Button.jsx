import styles from './component.module.css'

const Button = (props) => {
  return (
    <button {...props} className={`${props.className ? props.className + ' ' : ''}${styles.button}`}>
        {props.children}
    </button>
  )
}

export default Button