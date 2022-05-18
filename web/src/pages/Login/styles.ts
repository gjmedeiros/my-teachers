import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);

  main {
    header {
      img {
        width: 40rem;
      }
    }

    fieldset {
      border: 0rem;
      padding: 0 2.4rem;

      .input-block-login {
        & + .input-block-login {
          margin-top: 2.3rem;
        }
      }
    }
  }

  @media (min-width: 1100px) {
    /*Desktop View*/

    main {
      border: 0rem;
      padding: 0 2.8rem;

      header {
        img {
          height: 12rem;
        }
      }
    }
  }
`

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;
  display: flex;
  flex-direction: column;
  display: none;

  img {
    height: 10rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  @media (min-width: 1100px) {
    align-self: center;
    text-align: left;
    margin: 0;
    display: unset;

    img {
      justify-self: end;
      height: 45rem;
    }

    h2 {
      text-align: initial;
      font-size: 3rem;
    }
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3.2rem 0;

  button {
    width: 25rem;
    height: 6rem;
    border-radius: 0.8rem;
    border: none;
    font: 700 2rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    text-decoration: none;
    color: var(--color-button-text);

    background: var(--color-primary-lighter);

    transition: background-color 0.2s;

    :hover {
      background: var(--color-primary-light);
    }

    img {
      width: 4rem;
    }
  }

  a {
    width: 25rem;
    height: 6rem;
    border-radius: 0.8rem;
    font: 700 2rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    text-decoration: none;
    color: var(--color-button-text);
    background: var(--color-secundary);

    transition: background-color 0.2s;

    :hover {
      background: var(--color-secundary-dark);
    }

    img {
      width: 4rem;
    }
  }

  @media (min-width: 1100px) {
    a {
      font-size: 2.4rem;

      img {
        margin-right: 2.5rem;
      }
    }
  }
`

export const TotalConnections = styled.span`
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 0.8rem;
  }

  @media (min-width: 1100px) {
    justify-self: end;
  }
`