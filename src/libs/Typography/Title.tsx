import { FC, createElement } from "react";
import styled, { css, CSSProperties } from "styled-components";
import { colors, media } from "@/helpers/index";

type child = string | JSX.Element;

interface IStyledTitle {
  tag: string;
  color: string;
  weight: number;
  children: child | child[];
  className?: string;
  style?: CSSProperties;
}

interface ITitle {
  children: child | child[];
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  weight?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
}

interface IThemes {
  [key: string]: { [key: string]: { [key: string]: string } };
}

export const themes: IThemes = {
  h1: {
    desktop: {
      fontSize: "72px",
      lineHeight: "75px",
    },
    laptop: {
      fontSize: "72px",
      lineHeight: "75px",
    },
    tablet: {
      fontSize: "43px",
      lineHeight: "45px",
    },
    mobile: {
      fontSize: "37px",
      lineHeight: "38px",
    },
  },
  h2: {
    desktop: {
      fontSize: "56px",
      lineHeight: "58px",
    },
    laptop: {
      fontSize: "56px",
      lineHeight: "58px",
    },
    tablet: {
      fontSize: "48px",
      lineHeight: "50px",
    },
    mobile: {
      fontSize: "32px;",
      lineHeight: "33px",
    },
  },
  h3: {
    desktop: {
      fontSize: "32px",
      lineHeight: "29px",
    },
    laptop: {
      fontSize: "32px",
      lineHeight: "29px",
    },
    mobile: {
      fontSize: "24px;",
      lineHeight: "33px",
    },
  },
};

const TitleWithTag = (props: IStyledTitle) =>
  createElement(props.tag, { ...props, tag: null }, props.children);

const StyledTitle = styled((props: IStyledTitle) =>
  TitleWithTag(props)
)<IStyledTitle>`
  font-family: var(--font-brand), sans-serif;
  font-weight: ${(props) => props.weight};
  color: ${(props) => colors[props.color]};
  font-size: ${(props) => props.theme.mobile.fontSize};
  line-height: ${(props) => props.theme.mobile.lineHeight};

  ${(props) =>
    props.theme.tablet &&
    css`
      ${media.tablet} {
        font-size: ${props.theme.tablet.fontSize};
        line-height: ${props.theme.tablet.lineHeight};
      }
    `}

  ${(props) =>
    props.theme.laptop &&
    css`
      ${media.laptop} {
        font-size: ${props.theme.laptop.fontSize};
        line-height: ${props.theme.laptop.lineHeight};
      }
    `}

  ${(props) =>
    props.theme.desktop &&
    css`
      ${media.desktop} {
        font-size: ${props.theme.desktop.fontSize};
        line-height: ${props.theme.desktop.lineHeight};
      }
    `}
`;

const Title: FC<ITitle> = ({
  children,
  tag,
  weight = 700,
  color = "black",
  className,
  style
}): JSX.Element => {
  return (
    <StyledTitle
      className={className || ""}
      theme={themes[tag]}
      tag={tag}
      color={color}
      weight={weight}
      style={style}
    >
      {children}
    </StyledTitle>
  );
};

export { Title };
