import { FC, createElement } from "react";
import styled, { CSSProperties } from "styled-components";
import { colors } from "@/helpers/styleColors";

type child = number | string | JSX.Element;

interface IParagraph {
  children: child | child[];
  size?: 12 | 14 | 16 | 20 | 24 | 48 | number;
  weight?: number;
  tag?: string;
  color?: string;
  className?: string;
  style?: CSSProperties;
}

interface IStyledParagraph {
  tag: string;
  color: string;
  size: number;
  weight: number;
  children: child | child[];
  className?: string;
  style?: CSSProperties;
}

const ParagraphWithTag = (props: IStyledParagraph) =>
  createElement(props.tag, props, props.children);

const StyledParagraph = styled((props: IStyledParagraph) =>
  ParagraphWithTag(props)
)<IStyledParagraph>`
  font-family: var(--font-brand), sans-serif;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size}px;
  line-height: 1.8;
  color: ${(props) => colors[props.color]};
`;

const Paragraph: FC<IParagraph> = ({
  children,
  size = 16,
  weight = 400,
  tag = "p",
  color = "black",
  className,
  style,
}): JSX.Element => {
  return (
    <StyledParagraph
      className={className}
      tag={tag}
      size={size}
      color={color}
      weight={weight}
      style={style}
    >
      {children}
    </StyledParagraph>
  );
};

export { Paragraph };
