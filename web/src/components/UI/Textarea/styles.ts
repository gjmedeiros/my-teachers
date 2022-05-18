import styled from 'styled-components'

export const ConatinerTextArea = styled.div.attrs({
  className: 'textarea-block'
})`
  position: relative;

  /* .textarea-block + .textarea-block {
    margin-top: 1.4rem;
  } */

  label {
    font-size: 1.4rem;
  }

  textarea {
    width: 100%;
    min-height: 8rem;
    max-height: 18rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    resize: vertical;
    padding: 1.2rem 1.6rem;
    font: 1.6rem Archivo;
  }

  :focus-within::after {
    width: calc(100% - 3.2rem);
    height: 0.2rem;
    content: '';
    background: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 7px;
  }
`
