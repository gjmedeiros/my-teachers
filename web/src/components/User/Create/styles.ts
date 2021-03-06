import styled from 'styled-components'

export const Fieldset = styled.fieldset`
  border: 0;
  padding: 0 2.4rem;

  legend {
    font: 700 2.4rem Archivo;
    color: var(--color-text-title);
    margin-bottom: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid var(--color-line-in-white);

    .button-new-schedule {
      background: none;
      border: 0;
      color: var(--color-primary-light);
      font: 700 1.6rem Archivo;
      cursor: pointer;
      transition: color 0.2s;

      :hover {
        color: var(--color-primary-dark);
      }
    }
  }

  .checkProffy {
    font: 700 1.7rem Archivo;
    background-color: var(--color-primary-light);
    color: #000000;
    padding: 1.5rem;
    border-radius: 0.8rem;
    height: 3.5rem;
    width: 22rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;

    input {
      margin-left: 1rem;
      color: var(--color-primary-light);
      height: 2rem;
      width: 2rem;
      cursor: pointer;
    }
  }

  .input-block-form + .input-block-form {
    margin-top: 2.4rem;
  }

  .input-block-form + .textarea-block,
  .select-block + .input-block-form {
    margin-top: 2.4rem;
  }

  @media (min-width: 700px) {
    padding: 0 6.4rem;
  }
`

export const BlockFile = styled.div`
  background-color: #ffffff;
  border-radius: 0.8rem;
  margin: 2rem 0rem;
`

export const Footer = styled.footer`
  padding: 4rem 2.4rem;
  background: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);
  margin-top: 6.4rem;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--color-text-complement);

    img {
      margin-right: 2rem;
    }
  }

  button {
    width: 100%;
    height: 5.6rem;
    background: var(--color-secundary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.2s;
    margin-top: 3.2rem;

    :hover {
      background: var(--color-secundary-dark);
    }
  }

  @media (min-width: 700px) {
    padding: 4rem 6.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      justify-content: space-between;
    }

    button {
      width: 20rem;
      margin-top: 0;
    }
  }
`
