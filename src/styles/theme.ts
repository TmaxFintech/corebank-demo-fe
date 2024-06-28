import color from './constants/colors';
import elevation from './constants/elevation';
import font from './constants/fonts';
import opacity from './constants/opacity';
import radius from './constants/radius';
import spacing from './constants/spacing';

const theme = {
  ...font,
  color,
  elevation,
  opacity,
  radius,
  spacing,
};

export default theme;

export type ThemeType = typeof theme;
