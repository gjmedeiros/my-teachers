import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import { DropContainer, UploadMessage } from './styles'

const Upload = () => {
  const [files, setFiles] = useState([])

  // const onDrop = useCallback(acceptedFiles => {
  //   setFiles(
  //     acceptedFiles.map(file =>
  //       Object.assign(file, {
  //         preview: URL.createObjectURL(file)
  //       })
  //     )
  //   )
  // }, [])

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept: {
        'image/*': ['.jpeg', '.png']
      }
      // onDrop
    })

  const renderDragMessage = (isDragActive: boolean, isDragReject: boolean) => {
    if (!isDragActive) {
      return (
        <UploadMessage>
          Arraste e solte alguns arquivos aqui ou clique para selecionar os
          arquivos
        </UploadMessage>
      )
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não Suportado</UploadMessage>
    }

    return (
      <UploadMessage type="sucess">Solte os arquivos aqui...</UploadMessage>
    )
  }

  return (
    <DropContainer
      {...getRootProps()}
      isDragActive={isDragActive}
      isDragReject={isDragReject}
      className="dropzone"
    >
      <input {...getInputProps()} />
      {renderDragMessage(isDragActive, isDragReject)}
    </DropContainer>
  )
}

export default Upload
