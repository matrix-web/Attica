import { createGlobalStyle } from "styled-components";
import { media } from "@/helpers/index";

const Spacing = createGlobalStyle`
  :root {
    --space-inline: 12px;
    
    ${media.tablet} {
      --space-inline: 64px
    } 
    
    ${media.laptop} {
      --space-inline: 50px
    }
  }
`;

export { Spacing };
