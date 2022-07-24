/* eslint-disable react/prop-types */
import { UploadedFiles } from '../../../../types/UploadedFiles'
import { Container, FileInfo, Preview } from './styles'

interface IFileListProps {
  file: UploadedFiles
}

const FileList: React.FC<IFileListProps> = ({ file }) => {
  return (
    <Container>
      <li>
        <FileInfo>
          <Preview src={file.preview} />
          <div>
            <strong>{file.name}</strong>
            <span>
              {file.readableSize} <button type="button">Excluir</button>
            </span>
          </div>
        </FileInfo>
      </li>
    </Container>
  )
}

export default FileList
