import styles from './component.module.css'

const Link = (props) => {
  return (
    <a {...props} className={`${props.className ? props.className + ' ' : ''}${styles.button}`}>
        {props.children}
    </a>
  )
}

export default Link