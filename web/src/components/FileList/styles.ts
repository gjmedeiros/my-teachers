import styled from 'styled-components'

export const Container = styled.ul`
  margin-top: 1.2rem;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;
  }
`

export const FileInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 1.2rem;
      color: #222;
      margin-top: 0.3rem;

      button {
        border: 0;
        background: transparent;
        color: #e57878;
        margin-left: 0.3rem;
        font-size: 1.2rem;
        cursor: pointer;
      }
    }
  }
`

export const Preview = styled.div<{ src: string }>``
