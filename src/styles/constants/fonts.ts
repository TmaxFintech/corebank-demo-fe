const fontSizes = {
  xxxxl: '40px',
  xxxl: '36px',
  xxl: '32px',
  xl: '28px',
  l: '24px',
  xxxm: '22px',
  xxm: '20px',
  xm: '18px',
  m: '17px',
  s: '16px',
  xs: '15px',
  xxs: '14px',
  xxxs: '12px',
};

const fontWeights = {
  bold: 700,
  semibold: 600,
  medium: 500,
  regular: 400,
};

const lineHeights = {
  xxxl: '56px',
  xxl: '50px',
  xl: '44px',
  l: '38px',
  xxxm: '36px',
  xxm: '32px',
  xm: '30px',
  m: '26px',
  s: '24px',
  xs: '22px',
  xxs: '20px',
  xxxs: '16px',
};

const letterSpacings = {
  xxxxl: '-0.0282em',
  xxxl: '-0.027em',
  xxl: '-0.025em',
  xl: '-0.0236em',
  l: '-0.023em',
  xxxm: '-0.0194em',
  xxm: '-0.012em',
  xm: '-0.002em',
  m: '0em',
  s: '0.0057em',
  xs: '0.0096em',
  xxs: '0.0145em',
  xxxs: '0.0252em',
};

const fontStyle = {
  display1: {
    fontSize: fontSizes.xxxxl,
    lineHeight: lineHeights.xxxl,
    letterSpacings: letterSpacings.xxxxl,
  },
  display2: {
    fontSize: fontSizes.xxxl,
    lineHeight: lineHeights.xxl,
    letterSpacings: letterSpacings.xxxl,
  },
  h1: {
    fontSize: fontSizes.xxl,
    lineHeight: lineHeights.xl,
    letterSpacings: letterSpacings.xxl,
  },
  h2: {
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.l,
    letterSpacings: letterSpacings.xl,
  },
  h3: {
    fontSize: fontSizes.l,
    lineHeight: lineHeights.xxxm,
    letterSpacings: letterSpacings.l,
  },
  h4: {
    fontSize: fontSizes.xxxm,
    lineHeight: lineHeights.xxm,
    letterSpacings: letterSpacings.xxxm,
  },
  h5: {
    fontSize: fontSizes.xxm,
    lineHeight: lineHeights.xm,
    letterSpacings: letterSpacings.xxm,
  },
  h6: {
    fontSize: fontSizes.xm,
    lineHeight: lineHeights,
    letterSpacings: letterSpacings.xm,
  },
  body1: {
    fontSize: fontSizes.m,
    lineHeight: lineHeights.m,
    letterSpacings: letterSpacings.m,
  },
  body2: {
    fontSize: fontSizes.s,
    lineHeight: lineHeights.s,
    letterSpacings: letterSpacings.s,
  },
  body3: {
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
    letterSpacings: letterSpacings.xs,
  },
  caption1: {
    fontSize: fontSizes.xxs,
    lineHeight: lineHeights.xxs,
    letterSpacings: letterSpacings.xxs,
  },
  caption2: {
    fontSize: fontSizes.xxxs,
    lineHeight: lineHeights.xxxs,
    letterSpacings: letterSpacings.xxxs,
  },
};

export default {
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  fontStyle,
};
