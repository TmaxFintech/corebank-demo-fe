const fontSize = {
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

const fontWeight = {
  bold: 700,
  semibold: 600,
  medium: 500,
  regular: 400,
};

export type FontWeightKey = keyof typeof fontWeight;

const lineHeight = {
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

const letterSpacing = {
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
    fontSize: fontSize.xxxxl,
    lineHeight: lineHeight.xxxl,
    letterSpacing: letterSpacing.xxxxl,
  },
  display2: {
    fontSize: fontSize.xxxl,
    lineHeight: lineHeight.xxl,
    letterSpacing: letterSpacing.xxxl,
  },
  h1: {
    fontSize: fontSize.xxl,
    lineHeight: lineHeight.xl,
    letterSpacing: letterSpacing.xxl,
  },
  h2: {
    fontSize: fontSize.xl,
    lineHeight: lineHeight.l,
    letterSpacing: letterSpacing.xl,
  },
  h3: {
    fontSize: fontSize.l,
    lineHeight: lineHeight.xxxm,
    letterSpacing: letterSpacing.l,
  },
  h4: {
    fontSize: fontSize.xxxm,
    lineHeight: lineHeight.xxm,
    letterSpacing: letterSpacing.xxxm,
  },
  h5: {
    fontSize: fontSize.xxm,
    lineHeight: lineHeight.xm,
    letterSpacing: letterSpacing.xxm,
  },
  h6: {
    fontSize: fontSize.xm,
    lineHeight: lineHeight.m,
    letterSpacing: letterSpacing.xm,
  },
  body1: {
    fontSize: fontSize.m,
    lineHeight: lineHeight.m,
    letterSpacing: letterSpacing.m,
  },
  body2: {
    fontSize: fontSize.s,
    lineHeight: lineHeight.s,
    letterSpacing: letterSpacing.s,
  },
  body3: {
    fontSize: fontSize.xs,
    lineHeight: lineHeight.xs,
    letterSpacing: letterSpacing.xs,
  },
  caption1: {
    fontSize: fontSize.xxs,
    lineHeight: lineHeight.xxs,
    letterSpacing: letterSpacing.xxs,
  },
  caption2: {
    fontSize: fontSize.xxxs,
    lineHeight: lineHeight.xxxs,
    letterSpacing: letterSpacing.xxxs,
  },
};

export type FontStyleKey = keyof typeof fontStyle;

export default {
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  fontStyle,
};
