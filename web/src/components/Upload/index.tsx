import { DropEvent, useDropzone } from 'react-dropzone'

import { DropContainer, UploadMessage } from './styles'

interface IFunctionProps {
  onUpload: (files: File[], event: DropEvent) => void
}

// eslint-disable-next-line react/prop-types
const Upload: React.FC<IFunctionProps> = ({ onUpload }) => {
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept: {
        'image/*': ['.jpeg', '.png']
      },
      onDropAccepted: onUpload
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
    >
      <input {...getInputProps()} />
      {renderDragMessage(isDragActive, isDragReject)}
    </DropContainer>
  )
}

export default Upload
