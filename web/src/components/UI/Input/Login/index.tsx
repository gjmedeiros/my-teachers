import React, { InputHTMLAttributes } from 'react'

import { ContainerInputLogin } from './styles'

interface INInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string
  name: string
}

const InputLogin: React.FC<INInputProps> = ({ type, name, ...rest }) => {
  return (
    <ContainerInputLogin>
      <input type={type} {...rest} />
      <span data-placeholder={name} />
    </ContainerInputLogin>
  )
}

export default InputLogin
