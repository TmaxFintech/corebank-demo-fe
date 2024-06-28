import { HTMLAttributes } from 'react';
import styled from 'styled-components';

import fonts, {
  type FontStyleKey,
  type FontWeightKey,
} from '../../styles/constants/fonts';

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
  fontWeightKey = 'regular',
  children,
  ...rest
}: TypographyProps) {
  const componentAs = StyledTypographyAsProp(fontStyle);
  return (
    <StyledTypography
      {...rest}
      componentAs={componentAs}
      fontStyle={fontStyle}
      fontWeightKey={fontWeightKey}
    >
      {children}
    </StyledTypography>
  );
}

/**
 * fontStyle 에 맞게 Heading or Div로 컴포넌트를 나눕니다 - caption, body의 경우도 lineHeight의 적용을 위해 div로 처리합니다
 * @param key FontStyle
 * @returns  "h1" ~ "h6" or "div"
 */
const StyledTypographyAsProp = (key: FontStyleKey) => {
  switch (key) {
    case 'h1':
    case 'display1':
      return 'h1';
    case 'h2':
    case 'display2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'h5':
      return 'h5';
    case 'h6':
      return 'h6';
    default:
      return 'div';
  }
};

/**
 * fontStyleKey를 기반으로 텍스트 스타일을 반환합니다
 * @param key
 * @returns styled-component에 들어갈 css를 반환합니다
 */
const getTextStyles = (key: FontStyleKey) => {
  const fontStyle = fonts.fontStyle[key];
  return `
    font-size: ${fontStyle.fontSize};
    line-height: ${fontStyle.lineHeight};
    letter-spacing: ${fontStyle.letterSpacing};
  `;
};

interface StyledTypographyProps extends Omit<TypographyProps, 'children'> {
  componentAs: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
}

const StyledTypography = styled.div.attrs<StyledTypographyProps>(
  ({ componentAs }) => ({
    as: componentAs,
  })
)`
  ${({ fontStyle }) => getTextStyles(fontStyle)};
  font-weight: ${({ fontWeightKey = 'regular' }) =>
    fonts.fontWeight[fontWeightKey]};
`;
