import React, { InputHTMLAttributes } from 'react'

import { ContainerInputForm } from './styles'

interface INInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

const InputForm: React.FC<INInputProps> = ({ label, name, ...rest }) => {
  return (
    <ContainerInputForm>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </ContainerInputForm>
  )
}

export default InputForm
