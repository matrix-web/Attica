import React, { FC } from "react";
import styled from "styled-components";
import { colors, media } from "@/helpers/index";

interface IButton {
  children: JSX.Element | JSX.Element[] | string;
  size?: "sm" | "m";
  color?: string;
  isBlock?: boolean;
  isDisabled?: boolean;
  type?: "button" | "submit";
  className?: string;
  ariaLabel?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

interface IButtonStyled {
  children: React.ReactNode;
  isBlock: boolean;
  size: "sm" | "m";
  color: string;
}

const StyledButton = styled.button<IButtonStyled>`
  position: relative;
  padding: 16px 24px;
  width: ${({ isBlock }) => (isBlock ? "100%" : "auto")};
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${colors.white};
  background-color: ${({ color }) => colors[color]};
  transition: 0.3s ease;

  ${media.laptop} {
    padding: ${({ size }) => (size === "sm" ? "16px 24px" : "16px 32px")};
  }

  &:not(:disabled):hover,
  &:not(:disabled):active,
  &:not(:disabled):focus {
    background: ${colors.red200};
  }

  &:disabled {
    background-color: ${colors.gray200};
    cursor: not-allowed;
  }
`;

const Button: FC<IButton> = ({
  size = "m",
  color = "red100",
  isBlock = false,
  isDisabled = false,
  type = "button",
  className,
  onClick,
  children,
  ariaLabel,
}): JSX.Element => {
  return (
    <StyledButton
      className={className}
      size={size}
      color={color}
      isBlock={isBlock}
      disabled={isDisabled}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </StyledButton>
  );
};

export { Button };
