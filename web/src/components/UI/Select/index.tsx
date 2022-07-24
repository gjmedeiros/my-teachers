import React, { SelectHTMLAttributes } from 'react'

import { ContainerSelect } from './styles'

interface INSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  name: string
  options: Array<{
    value: string
    label: string
  }>
}

const Select: React.FC<INSelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <ContainerSelect>
      <label htmlFor={name}>{label}</label>
      <select value="" id={name} {...rest}>
        <option value="" disabled hidden>
          Selecione qual você quer ensinar
        </option>

        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
    </ContainerSelect>
  )
}

export default Select
