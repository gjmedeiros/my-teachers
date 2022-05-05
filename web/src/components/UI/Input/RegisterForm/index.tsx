import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface INInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

const InputForm: React.FC<INInputProps> = ({ label, name, ...rest }) => {
  return (
    <div className="input-block-form">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  )
}

export default InputForm
