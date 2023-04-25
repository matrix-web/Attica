import { createGlobalStyle } from "styled-components";

const Colors = createGlobalStyle`
  :root {
    --color-white: #ffffff;
    --color-black: #000000;
    --color-red-100: #EF3E2D;
    --color-red-200: #C83224;
    --color-gray-100: #1D1015;
    --color-gray-200: #A5A5A5;
  }
`;

export { Colors };
