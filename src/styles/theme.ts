import color from './constants/colors';
import elevations from './constants/elevations';
import font from './constants/fonts';
import opacity from './constants/opacity';
import radius from './constants/radius';
import spacing from './constants/spacing';

const theme = {
  ...font,
  color,
  elevations,
  opacity,
  radius,
  spacing,
};

export default theme;

export type ThemeType = typeof theme;
