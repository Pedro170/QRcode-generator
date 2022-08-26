import React from 'react'
import styles from './Input.module.css'

const Input = ({ id, ...props }) => {
  return (
    <label htmlFor={ id }>
      <input
        id={ id }
        className={ styles.input }
        { ...props }
      />
    </label>
  )
}

export default Input
