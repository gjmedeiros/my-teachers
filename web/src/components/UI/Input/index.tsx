import React, { InputHTMLAttributes } from 'react'

import { Container } from './styles'

interface INInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

const InputForm: React.FC<INInputProps> = ({ label, name, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </Container>
  )
}

export default InputForm
