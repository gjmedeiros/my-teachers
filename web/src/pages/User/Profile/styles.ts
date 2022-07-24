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
