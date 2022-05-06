import styled, { css } from 'styled-components'

interface INDragStatus {
  isDragActive: boolean
  isDragReject: boolean
}

const dragActive = css`
  border-color: #78e5d5;
`

const dragReject = css`
  border-color: #e57878;
`

export const DropContainer = styled.div<INDragStatus>`
  border: dashed 0.4rem var(--color-primary-light);
  border-radius: 0.8rem;

  cursor: pointer;

  ${({ isDragActive }) => isDragActive && dragActive};
  ${({ isDragReject }) => isDragReject && dragReject};
`

type colorOptions = {
  [key: string]: string
}

const messageColors: colorOptions = {
  default: '#999',
  error: '#e57878',
  sucess: '#78e5d5'
}

export const UploadMessage = styled.p<{ type?: string }>`
  display: flex;
  color: ${({ type }) => messageColors[type || 'default']};
  align-items: center;
  justify-content: center;

  padding: 5rem;

  font: 700 1.45rem Archivo;
`
