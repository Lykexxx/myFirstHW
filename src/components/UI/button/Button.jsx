import React from 'react'
import styles from './button.module.css'

const Button = ({children, onClick}) => {
  return (
    <li className={styles.list__item}>
      <button onClick={onClick} className={styles.button}>{children}</button>
    </li>
  )
}

export default Button