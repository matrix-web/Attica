import { FC } from "react";
import styled from "styled-components";
import { Title } from "@/libs/Typography/Title";
import { Paragraph } from "@/libs/Typography/Paragraph";
import DescImage from "@/assets/images/preview-desc.jpg";
import ImageDecorTitle from "@/assets/images/decor-1.png";
import imageDecorPreview from "@/assets/images/decor-2.png";
import { media } from "@/helpers/index";
import { DESC_1, DESC_2, DESC_3, TITLE } from "@/mocks/description";

const StyledDescription = styled.section`
  padding: 80px 0 140px;
  position: relative;
  overflow-x: hidden;

  ${media.tablet} {
    padding: 80px 64px 150px 64px;
  }

  ${media.laptop} {
    padding: 130px 36px 97px 50px;
  }

  ${media.desktop} {
    padding: 77px 36px 150px 50px;
  }

  &:before {
    content: "";
    width: 100%;
    height: 140px;
    position: absolute;
    top: -36px;
    left: 0;
    background: linear-gradient(
      357.24deg,
      #1d1015 69.35%,
      rgba(29, 16, 21, 0) 97.16%
    );
    z-index: -1;

    ${media.laptop} {
      height: 263px;
      top: -68px;
    }
    ${media.desktop} {
      top: -125px;
    }
  }
`;

const StyledTitle = styled(Title)`
  display: inline-block;
  position: relative;
  margin-bottom: 102px;
  text-transform: uppercase;
  padding: 0 12px;

  ${media.tablet} {
    margin-bottom: 70px;
    padding: 0;
  }

  ${media.laptop} {
    margin-bottom: 32px;
  }

  &::after {
    content: "";
    background-image: url(${ImageDecorTitle.src});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 299px;
    height: 98px;
    display: block;
    position: absolute;
    right: -34px;
    top: 10px;

    ${media.tablet} {
      right: -53%;
      top: 17px;
    }

    ${media.laptop} {
      right: -30%;
    }

    ${media.desktop} {
      right: -48%;
    }
  }
`;

const StyledParagraph = styled(Paragraph)`
  line-height: 24px;

  &:not(:last-child) {
    margin-bottom: 24px;

    ${media.desktop} {
      margin-bottom: 36px;
    }
  }

  ${media.laptop} {
    font-size: 20px;
    line-height: 26px;
  }
`;

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  ${media.laptop} {
    grid-template-columns: 45% 53%;
    gap: 33px;
    align-items: center;
  }

  ${media.desktop} {
    grid-template-columns: 46% 51%;
    gap: 46px;
    align-items: flex-start;
  }
`;

const StyledDescriptionWrapper = styled.div`
  padding: 0 12px;

  ${media.tablet} {
    padding: 0;
  }
`;

const StyledPreview = styled.div`
  position: relative;
  width: 100%;

  &::after {
    content: "";
    background-image: url(${imageDecorPreview.src});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 350px;
    height: 151px;
    position: absolute;
    z-index: -1;
    bottom: -56px;
    left: -24px;

    ${media.tablet} {
      width: 531px;
      height: 241px;
      bottom: -84px;
      left: 6px;
    }

    ${media.laptop} {
      width: 517px;
      height: 210px;
      bottom: -89px;
      left: -39px;
    }

    ${media.desktop} {
      width: 603px;
      height: 278px;
      bottom: -98px;
      left: 8px;
    }
  }

  ${media.laptop} {
    max-height: 238px;
  }

  ${media.desktop} {
    max-height: initial;
  }
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${media.laptop} {
    height: 238px;
  }

  ${media.desktop} {
    height: 100%;
  }
`;

const StyledImageWrapper = styled.div`
  padding: 0 12px;

  ${media.tablet} {
    padding: 0;
  }
`;

const Description: FC = (): JSX.Element => {
  return (
    <StyledDescription>
      <StyledTitle tag="h2" weight={900} color="white">
        {TITLE}
      </StyledTitle>
      <StyledContent>
        <StyledDescriptionWrapper>
          <StyledParagraph color="white" weight={600} size={18}>
            {DESC_1}
          </StyledParagraph>
          <StyledParagraph color="white" weight={400} size={18}>
            {DESC_2}
          </StyledParagraph>
          <StyledParagraph color="white" weight={400} size={18}>
            {DESC_3}
          </StyledParagraph>
        </StyledDescriptionWrapper>
        <StyledPreview>
          <StyledImageWrapper>
            <StyledImage src={DescImage.src} alt="preview" />
          </StyledImageWrapper>
        </StyledPreview>
      </StyledContent>
    </StyledDescription>
  );
};

export default Description;
