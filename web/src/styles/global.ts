import { createGlobalStyle } from 'styled-components'

const styled = { createGlobalStyle }

export default styled.createGlobalStyle`
  :root {
    font-size: 60%;

    --color-background: #e5e5e5;

    --color-primary: #04284e;

    --color-primary-light: #916bea;
    --color-primary-dark: #774dd6;

    --color-secundary: #04d361;
    --color-secundary-dark: #04bf58;

    --color-title-in-primary: #ffffff;
    --color-text-in-primary: #d4c2ff;
    --color-text-title: #32264d;
    --color-text: #000000
    --color-text-complement: #9c98a6;
    --color-text-base: #6a6180;
    --color-line-in-white: #e6e6f0;

    --color-input-background: #fafafc;
    --color-select-text: #c1bccc;

    --color-button-text: #ffffff;
    --color-box-base: #ffffff;
    --color-box-footer: #fafafc;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100vh;
  }

  body {
    background: var(--color-background);
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Poppins;
    color: var(--color-text-base);
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`
