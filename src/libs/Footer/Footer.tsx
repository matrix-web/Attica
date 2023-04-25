import React from "react";
import styled from "styled-components";
import Info, { IInfo } from "@/libs/Footer/Info";
import { media } from "@/helpers/index";
import { Logo } from "@/libs/Logo/Logo";
import SubscribeForm from "@/components/common/SubscribeForm";
import { Paragraph } from "@/libs/Typography/Paragraph";

interface IFooter {
  info: IInfo;
  rights: string;
  documents: {
    name: string;
    link: string;
  }[];
}

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.1;
    z-index: -1;
  }
`;

const StyledContainer = styled.div`
  margin-top: 44px;
  padding: 0 var(--space-inline);
  display: flex;
  flex-direction: column;

  ${media.tablet} {
    display: grid;
    gap: 45px;
    grid-template-columns: 1fr 340px;
    align-items: center;
    margin-bottom: 80px;
  }

  ${media.laptop} {
    margin-top: 65px;
    grid-template-columns: 1fr 427px;
  }
`;

const StyledLogo = styled(Logo)`
  min-width: 255px;
  min-height: 52px;
  margin-bottom: 30px;

  ${media.tablet} {
    margin-bottom: 0;
  }
`;

const StyledRights = styled.div`
  padding: 0 var(--space-inline);
  margin-bottom: 40px;
  display: flex;
  flex-direction: column-reverse;

  ${media.tablet} {
    flex-direction: row;
    margin-bottom: 30px;
  }

  ${media.laptop} {
    margin-bottom: 40px;
  }
  ${media.desktop} {
    margin-bottom: 53px;
  }
`;

const StyledLinks = styled.div`
  margin-bottom: 14px;
  display: flex;
  align-items: center;

  ${media.tablet} {
    margin-bottom: 0;
    margin-left: 20px;
  }

  ${media.laptop} {
    margin-left: 83px;
  }
`;

const StyledLink = styled.a`
  &:not(:last-of-type) {
    margin-right: 48px;
  }
`;

const StyledFrame = styled.iframe`
  width: 100%;
  border: none;
  max-height: 130px;
  overflow: hidden;
`;

const Footer: React.FC<IFooter> = (props) => {
  const { info, rights, documents } = props;
  return (
    <StyledFooter>
      <Info
        email={info.email}
        socials={info.socials}
        address={info.address}
        phone={info.phone}
      />
      <StyledContainer>
        <StyledLogo />
        <StyledFrame data-cursor="-hidden" src="/mailchimp/mailchimp.attica.html" />
        {/* <SubscribeForm isSmallGap={true} /> */}
      </StyledContainer>
      <StyledRights>
        <Paragraph color="white" size={12} weight={400}>
          {rights}
        </Paragraph>
        {/* <StyledLinks>
          {documents.length !== 0 ? (
            documents.map((item, index) => (
              <StyledLink href={item.link} key={index}>
                <Paragraph tag="span" color="white" size={12} weight={400}>
                  {item.name}
                </Paragraph>
              </StyledLink>
            ))
          ) : (
            <></>
          )}
        </StyledLinks> */}
      </StyledRights>
    </StyledFooter>
  );
};

export default Footer;
