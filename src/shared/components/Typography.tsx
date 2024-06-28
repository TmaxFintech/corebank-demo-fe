import { HTMLAttributes } from "react";
import styled from "styled-components";

import fonts, {
  type FontStyleKey,
  type FontWeightKey,
} from "../../styles/constants/fonts";

export interface TypographyProps
  extends HTMLAttributes<HTMLDivElement | HTMLHeadingElement> {
  fontStyle: FontStyleKey;
  fontWeightKey?: FontWeightKey;
  children: React.ReactNode;
}

/**
 * Typography 컴포넌트는 텍스트 스타일을 적용하는 컴포넌트입니다. fontStyle 값에 따라 Heading / Div로 나뉩니다
 * HTMLDivElement | HTMLHeadingElement를 상속받습니다 - rest props를 통해 다양한 속성을 받을 수 있습니다
 */
export default function Typography({
  fontStyle,
  fontWeightKey = "regular",
  children,
  ...rest
}: TypographyProps) {
  const componentAs = typographyElementMap[fontStyle];
  return (
    <StyledTypography
      {...rest}
      as={componentAs}
      fontStyle={fontStyle}
      fontWeightKey={fontWeightKey}
    >
      {children}
    </StyledTypography>
  );
}

const typographyElementMap: Record<
  FontStyleKey,
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div"
> = {
  display1: "h1",
  display2: "h2",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "div",
  body2: "div",
  body3: "div",
  caption1: "div",
  caption2: "div",
};

/**
 * fontStyleKey를 기반으로 텍스트 스타일을 반환합니다
 * @param key
 * @returns styled-component에 들어갈 css를 반환합니다
 */
const getTextStyles = (key: FontStyleKey) => {
  const { fontSize, lineHeight, letterSpacing } = fonts.fontStyle[key];
  return `
    font-size: ${fontSize};
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing};
  `;
};

interface StyledTypographyProps extends Omit<TypographyProps, "children"> {}

const StyledTypography = styled.div<StyledTypographyProps>`
  ${({ fontStyle }) => getTextStyles(fontStyle)};
  font-weight: ${({ fontWeightKey = "regular" }) =>
    fonts.fontWeight[fontWeightKey]};
`;
