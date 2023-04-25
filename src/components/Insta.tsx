import { FC, useEffect } from "react";
import styled from "styled-components";
import { Title } from "@/libs/Typography/Title";
import { media } from "../helpers";
import { TITLE } from "@/mocks/insta";

const StyledInsta = styled.section`
  padding: 0 12px 120px 12px;
  overflow-x: hidden;

  ${media.tablet} {
    padding: 0 64px 120px 64px;
  }

  ${media.laptop} {
    padding: 0 24px 150px 50px;
  }

  ${media.desktop} {
    padding: 0 36px 150px 50px;
  }
`;

const StyledTitle = styled(Title)`
  margin-bottom: 50px;
  text-transform: uppercase;
`;

const Insta: FC = (): JSX.Element => {

  return (
    <StyledInsta>
      <StyledTitle tag="h2" weight={900} color="white">
        {TITLE}
      </StyledTitle>
      <div data-cursor="-text" data-cursor-text="swipe" data-elfsight-app-lazy className="elfsight-app-42a25d21-6a18-4614-8362-7b62ca6d9d43"></div>
    </StyledInsta>
  );
};

export default Insta;
