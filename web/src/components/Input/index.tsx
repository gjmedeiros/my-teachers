import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface INInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string
  name: string
}

const Input: React.FC<INInputProps> = ({ type, name, ...rest }) => {
  return (
    <div className="input-block">
      <input type={type} {...rest} />
      <span className="text-input" data-placeholder={name} />
    </div>
  )
}

export default Input
