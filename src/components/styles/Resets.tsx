import { createGlobalStyle } from "styled-components";

import { colors } from "@/helpers/index";

const Resets = createGlobalStyle`
  * {
    outline: none;
    cursor: auto;

    @media (min-width: 1024px) {
      cursor: none;
    }
  }

  body {
    margin: 0;

    color: ${colors.white};
    background-color: ${colors.gray100};
    font-family: var(--font-brand), sans-serif;
    font-style: normal;
    font-weight: normal;
    overflow: overlay;
  }

  p {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${colors.black};
    font-family: var(--font-brand), sans-serif;
  }

  input,
  button,
  textarea {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background-color: transparent;
    font-family: var(--font-brand), sans-serif;

    resize: none;
  }

  button {
    cursor: pointer;
  }

  table {
    border-collapse: collapse;
  }

  .image-cover {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-contain {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
`;

export { Resets };
