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

      .forgot-password {
        margin-top: 1rem;

        a {
          color: var(--color-text-base);
          text-decoration: none;
          transition: opacity 0.2s;

          :hover {
            opacity: 0.5;
          }
        }
      }
    }
  }

  @media (min-width: 1100px) {
    /*Desktop View*/

    display: flex;
    justify-content: space-around;

    main {
      border: 0rem;
      padding: 0 2.8rem;

      header {
        padding: 1rem 0rem;

        img {
          height: 12rem;
        }
      }
    }
  }
`
