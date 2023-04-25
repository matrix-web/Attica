import React from "react";
import styled from "styled-components";

interface IContainer {
  children: JSX.Element | JSX.Element[];
}

const StyledContainer = styled.div`
  box-sizing: border-box;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--space-inline);
`;

const Container: React.FC<IContainer> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
