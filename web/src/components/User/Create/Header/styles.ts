import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);

  .top-bar-container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-text-in-primary);
    padding: 1.6rem 0;

    a {
      height: 3.2rem;
      transition: opacity 0.2s;

      :hover {
        opacity: 0.6;
      }
    }

    > img {
      height: 2.5rem;
    }
  }

  .header-content {
    width: 90%;
    margin: 0 auto;
    position: relative;
    margin: 3.2rem auto;

    strong {
      font: 700 3.6rem Archivo;
      line-height: 4.2rem;
      color: var(--color-title-in-primary);
    }

    p {
      max-width: 30rem;
      font-size: 1.6rem;
      line-height: 2.6rem;
      color: var(--color-text-in-primary);
      margin-top: 2.4rem;
    }
  }

  @media (min-width: 700px) {
    height: 340px;

    .top-bar-container {
      max-width: 1500px;
    }

    .header-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      flex: 1;
      max-width: 740px;
      margin: 0 auto;
      padding-bottom: 48px;

      strong {
        max-width: 350px;
      }
    }
  }
`
