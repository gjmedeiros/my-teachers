import styled from 'styled-components'

export const ContainerInputLogin = styled.div.attrs({
  className: 'input-block-login'
})`
  position: relative;

  input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;

    :focus {
      outline: 0;
    }

    :focus + span::after {
      top: -15px;
    }

    :focus + span::before {
      width: 100%;
    }
  }

  .has-val {
    + span::after {
      top: -15px;
    }

    + span::before {
      width: 100%;
    }
  }

  span {
    display: flex;
    justify-content: flex-start;
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 0.5rem;
    pointer-events: none;
    color: var(--color-text-base);
    font: 1.6rem Archivo;

    ::after {
      content: attr(data-placeholder);
      position: absolute;
      top: 2.7rem;
      transition: all 0.4s;
    }
  }
`
