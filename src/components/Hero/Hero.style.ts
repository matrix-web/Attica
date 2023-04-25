import styled from "styled-components";
import { media, colors } from "@/helpers/index";
import { Logo } from "@/libs/Logo/Logo";
import { Title } from "@/libs/Typography/Title";
import { Paragraph } from "@/libs/Typography/Paragraph";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(async () => await import("react-player"), {
  ssr: false
});


export const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  padding: 20px var(--space-inline) 12px;
  box-sizing: border-box;
  min-height: 100vh;


  &::after {
    content: "";
    display: block;
    width: 100%;
    min-height: 80px;
    position: absolute;
    z-index: 10;
    left: 0;
    right: 0;
    bottom: -26px;
    background: linear-gradient(360deg, #1D1015 37.5%, rgba(29, 16, 21, 0) 91.22%);

    ${media.tablet} {
      min-height: 100px;
      bottom: -64px;
    }

    ${media.desktop} {
      min-height: 150px;
      bottom: -50px;
    }
  }

  ${media.tablet} {
    min-height: 100vh;
    height: 541px;
    padding: 30px var(--space-inline) 25px;
  }
  ${media.laptop} {
    height: 730px;
    padding: 50px var(--space-inline) 30px;
  }
  ${media.desktop} {
    height: 800px;
    padding: 50px var(--space-inline) 84px;
  }
`;

export const StyledLogo = styled(Logo)`
  margin-bottom: 65px;

  ${media.tablet} {
    margin-bottom: 50px;
  }

  ${media.laptop} {
    margin-bottom: 40px;
  }
`;

export const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: -1;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledReactVideo = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: -1;
  transform: translateX(-50%);
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
  background-color: ${colors.black};

  video {
    object-fit: cover;
  }
`;

// font-family: var(--font-gemsbuck);
// margin-bottom: 2px;
export const StyledTitle = styled(Title)`
  margin-bottom: 8px;

  ${media.laptop} {
    margin-bottom: 24px;
  }
`;

export const StyledSubtitle = styled(Paragraph)`
  letter-spacing: 0.04em;
  line-height: 24px;
  max-width: 265px;

  ${media.tablet} {
    max-width: none;
  }

  ${media.laptop} {
    font-size: 30px;
  }
`;

export const StyledSubscribe = styled.div`
  margin-top: auto;

  ${media.laptop} {
    transform: translateY(50px);
  }
`;

export const StyledSubscribeText = styled(Paragraph)`
  letter-spacing: 0.05em;
  line-height: 32px;
  margin-bottom: 20px;

  ${media.laptop} {
    margin-bottom: 32px;
    font-size: 32px;
  }
`;

export const StyledFrame = styled.iframe`
  width: 100%;
  border: none;
  max-height: 130px;
  overflow: hidden;
`;

export const StyledLoaderWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPicture = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: -1;
  opacity: 0;
  transform: translateX(-50%);
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
`; 