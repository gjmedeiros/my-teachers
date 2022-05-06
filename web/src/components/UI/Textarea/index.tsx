import React, { TextareaHTMLAttributes } from 'react'

import { ConatinerTextArea } from './styles'

interface INTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  name: string
}

const Textarea: React.FC<INTextareaProps> = ({ label, name, ...rest }) => {
  return (
    <ConatinerTextArea>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </ConatinerTextArea>
  )
}

export default Textarea
