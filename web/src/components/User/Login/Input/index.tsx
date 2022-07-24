import React, { InputHTMLAttributes } from 'react'

import { Container } from './styles'

interface INInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string
  name: string
}

const InputLogin: React.FC<INInputProps> = ({ type, name, ...rest }) => {
  return (
    <Container>
      <input type={type} {...rest} />
      <span data-placeholder={name} />
    </Container>
  )
}

export default InputLogin
