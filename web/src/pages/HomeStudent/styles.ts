import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  main {
    margin: 3.2rem auto;
    width: 90%;
  }

  @media (min-width: 700px) {
    max-width: 100%;

    main {
      padding: 3.2rem 0;
      max-width: 740px;
      margin: 0 auto;

      .teacher-item {
        header,
        footer {
          padding: 3.2rem;
        }

        > p {
          padding: 0 3.2rem;
        }

        footer {
          p {
            strong {
              display: initial;
              margin-left: 1.6rem;
            }
          }

          button {
            width: 24.5rem;
            font-size: 1.6rem;
            justify-content: center;

            img {
              margin-right: 1.6rem;
            }
          }
        }
      }
    }
  }
`

export const Form = styled.form`
  margin-top: 3.2rem;

  label {
    color: var(--color-text-in-primary);
  }

  .select-block {
    & + .select-block {
      margin-top: 1.4rem;
    }
  }

  .input-block-form {
    position: relative;

    margin-top: 1.4rem;

    label {
      font-size: 1.4rem;
    }

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
    }

    :focus-within::after {
      width: calc(100% - 3.2rem);
      height: 2px;
      content: '';
      background: var(--color-primary-light);
      position: absolute;
      left: 1.6rem;
      right: 1.6rem;
      bottom: 0;
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
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;

    .input-block-form {
      margin-top: 0rem;
    }

    .input-block-form + .input-block-form,
    .select-block + .select-block {
      margin-top: 0;
    }
  }
`
