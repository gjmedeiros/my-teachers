import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  .page-header {
    .header-content {
      margin-bottom: 6.4rem;
    }
  }

  main {
    background: var(--color-box-base);

    width: 100%;
    max-width: 74rem;
    border-radius: 0.8rem;
    margin: -3.2rem auto 3.2rem;
    padding-top: 6.4rem;
    overflow: hidden;

    fieldset + fieldset {
      margin-top: 5rem;
    }

    label {
      color: var(--color-text-complement);
    }
  }

  @media (min-width: 700px) {
    max-width: 100vw;

    .page-header {
      .header-content {
        margin-bottom: 0;
      }
    }

    main {
      .schedule-item {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        column-gap: 1.6rem;

        & + .schedule-item {
          margin-top: 1.5rem;
        }

        .input-block-form {
          margin-top: 0 !important;

          & + .input-block-form {
            margin-top: 1.5rem;
          }
        }
      }
    }
  }
`
