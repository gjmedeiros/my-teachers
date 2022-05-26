/* eslint-disable react/prop-types */
import { CircularProgressbar } from 'react-circular-progressbar'
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md'

import { UploadedFiles } from '../../types/UploadedFiles'
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
        <div>
          {!file.uploaded && !file.error && (
            <CircularProgressbar
              styles={{
                root: { width: 24 },
                path: { stroke: '#7159c1' }
              }}
              strokeWidth={10}
              value={file.progress}
            />
          )}

          {file.uploaded && <MdCheckCircle size={24} color="#78e5d5" />}
          {file.error && <MdError size={24} color="#e57878" />}
        </div>
      </li>
    </Container>
  )
}

export default FileList
