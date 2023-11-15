import React from 'react'
import s from './input.module.css'

const Input = ({text, type, onChange, value}) => {

  return (
    <input onChange={onChange} className={s.input} type={type} placeholder={text} value={value}/>
  )
}

export default Input