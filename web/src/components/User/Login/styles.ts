import styled from 'styled-components'

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

    cursor: pointer;
    background: var(--color-primary-light);

    transition: background-color 0.2s;

    :hover {
      background: var(--color-primary-dark);
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
    button {
      font-size: 2.4rem;

      img {
        margin-right: 1rem;
      }
    }

    a {
      font-size: 2.4rem;

      img {
        margin-right: 1rem;
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
