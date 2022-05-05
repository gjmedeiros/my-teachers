import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface INInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string
  name: string
}

const InputLogin: React.FC<INInputProps> = ({ type, name, ...rest }) => {
  return (
    <div className="input-block-login">
      <input type={type} {...rest} />
      <span className="text-input-login" data-placeholder={name} />
    </div>
  )
}

export default InputLogin
