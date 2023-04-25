import React from "react";
import styled from "styled-components";
import { Paragraph } from "@/libs/Typography/Paragraph";
import { colors, media } from "@/helpers/index";
import { Icon } from "@/libs/Icon/Icon";

export interface IInfo {
  email: string;
  phone: string;
  address: string;
  socials: {
    icon: string;
    link: string;
  }[];
}

const StyledInfo = styled.div`
  border-top: 1px solid ${colors.white};
  border-bottom: 1px solid ${colors.white};
  padding-top: 24px;

  ${media.tablet} {
    padding-top: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.laptop} {
    grid-template-columns: repeat(3, auto);
  }

  ${media.desktop} {
    grid-template-columns: repeat(4, auto);
  }
`;

const StyledInfoItem = styled.div`
  ${media.tablet} {
    display: flex;
    justify-content: flex-start;
    padding: 24px var(--space-inline);
  }

  ${media.laptop} {
    padding: 23px 54px;
    justify-content: center;
  }

  &:nth-child(1),
  &:nth-child(2) {
    margin-bottom: 24px;

    ${media.tablet} {
      margin-bottom: 0;
      border-bottom: 1px solid ${colors.white};
    }
    ${media.laptop} {
      border-bottom: none;
      border-right: 1px solid ${colors.white};
    }
  }

  &:nth-child(2),
  &:nth-child(4) {
    ${media.tablet} {
      justify-content: flex-end;
    }

    ${media.laptop} {
      justify-content: center;
    }
  }

  &:nth-child(4) {
    ${media.laptop} {
      grid-column: 1/4;
      border-top: 1px solid ${colors.white};
    }

    ${media.desktop} {
      border: none;
      grid-column: initial;
    }
  }
`;

const StyledLink = styled.a`
  width: fit-content;
  display: inline;
`;

const StyledParagraph = styled(Paragraph)`
  line-height: 24px;
  padding: 0 var(--space-inline);
  margin-bottom: 24px;

  ${media.tablet} {
    padding: 0;
    margin-bottom: 0;
  }

  ${media.laptop} {
    font-size: 20px;
  }
`;

const StyledSocials = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${colors.white};
  padding: 24px 0;

  ${media.tablet} {
    padding: 0;
    border: none;
    justify-content: flex-end;
  }
`;

const StyledSocialLink = styled.a`
  &:not(:last-of-type) {
    margin-right: 35px;
  }
`;

const Info: React.FC<IInfo> = (props) => {
  const { email, phone, address, socials } = props;
  return (
    <StyledInfo>
      <StyledInfoItem>
        <StyledLink href={`mailto:${email}`}>
          <StyledParagraph tag="span" size={18} weight={600} color="white">
            {email}
          </StyledParagraph>
        </StyledLink>
      </StyledInfoItem>
      <StyledInfoItem>
        <StyledLink href={`tel:${phone.replace(/[^0-9]/g, "")}`}>
          <StyledParagraph tag="span" size={18} weight={600} color="white">
            {phone}
          </StyledParagraph>
        </StyledLink>
      </StyledInfoItem>
      <StyledInfoItem>
        <StyledParagraph size={18} weight={600} color="white">
          {address}
        </StyledParagraph>
      </StyledInfoItem>
      <StyledInfoItem>
        <StyledSocials>
          {socials.length !== 0 ? (
            socials.map((item, index) => (
              <StyledSocialLink href={item.link} key={index}>
                <Icon name={item.icon} color="white" size={24} />
              </StyledSocialLink>
            ))
          ) : (
            <></>
          )}
        </StyledSocials>
      </StyledInfoItem>
    </StyledInfo>
  );
};

export default Info;
