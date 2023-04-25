import { FC } from "react";
import styled, { CSSProperties } from "styled-components";
import { colors } from "@/helpers/index";

interface IconProps {
  name: string;
  color?: string;
  size?: 16 | 24 | 32 | 64 | number;
  colorProperty?: "fill" | "stroke";
  className?: string;
  style?: CSSProperties;
}

interface IStyledIcon {
  color: string;
  size: 16 | 24 | 32 | 64 | number;
  colorProperty: "fill" | "stroke";
}

const StyledIcon = styled.svg<IStyledIcon>`
  display: inline-block;
  vertical-align: middle;
  width: ${({ size }) => size}px !important;
  height ${({ size }) => size}px !important;
  fill: none;
  stroke: none;
  ${({ color, colorProperty }) => `${colorProperty} : ${colors[color]}`};
`;

const Icon: FC<IconProps> = ({
  name,
  color = "black",
  size = 24,
  colorProperty = "fill",
  className,
  style,
}): JSX.Element => {
  return (
    <StyledIcon
      className={className || ""}
      color={color}
      size={size}
      colorProperty={colorProperty}
      style={style}
    >
      <use xlinkHref={`#${name}`} />
    </StyledIcon>
  );
};

export { Icon };
