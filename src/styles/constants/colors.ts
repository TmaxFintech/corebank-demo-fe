const colorToken = {
  common0: '#FFF',
  common100: '#000',

  neutral90: '#1C1D1D',
  neutral80: '#3D3D3E',
  neutral70: '#5B5C5D',
  neutral60: '#6F6F70',
  neutral50: '#979899',
  neutral40: '#B7BBBB',
  neutral30: '#DADBDC',
  neutral20: '#EAEAEA',
  neutral10: '#F2F3F4',
  neutral05: '#F8F9FA',

  coolNeutral90: '#000C1A',
  coolNeutral80: '#001A1E',
  coolNeutral70: '#082A30',
  coolNeutral60: '#143B42',
  coolNeutral50: '#1C4850',
  coolNeutral40: '#3D6067',
  coolNeutral30: '#5C797F',
  coolNeutral20: '#879EA3',
  coolNeutral10: '#B4C5C8',
  coolNeutral05: '#DEE8EB',

  turquoise90: '#001E25',
  turquoise80: '#00394C',
  turquoise70: '#004A62',
  turquoise60: '#005B79',
  turquoise50: '#006888',
  turquoise40: '#027B98',
  turquoise30: '#008EA9',
  turquoise20: '#38ADC2',
  turquoise10: '#8BCFDC',
  turquoise05: '#CEECF3',

  turquoiseGradationStart: '#035E7C',
  turquoiseGradationEnd: '#36A8BE',

  blue90: '#2341E0',
  blue80: '#0066FF',
  blue70: '#0079FF',
  blue60: '#008EFF',
  blue50: '#009DFF',
  blue40: '#00ADFF',
  blue30: '#46BDFF',
  blue20: '#88D0FF',
  blue10: '#BAE2FF',
  blue05: '#E2F4FF',

  orange90: '#E65200',
  orange80: '#EF6D00',
  orange70: '#F57D00',
  orange60: '#FB8B00',
  orange50: '#FF9900',
  orange40: '#FFA826',
  orange30: '#FFB84D',
  orange20: '#FFC080',
  orange10: '#FFE0B2',
  orange05: '#FFF3E0',

  green90: '#009823',
  green80: '#00BE30',
  green70: '#00D33B',
  green60: '#00EA46',
  green50: '#00FC4E',
  green40: '#00FF6D',
  green30: '#69FF8C',
  green20: '#A0FFB1',
  green10: '#C9FFD0',
  green05: '#E9FFEC',

  red90: '#7B1B1C',
  red80: '#C62828',
  red70: '#D32F2F',
  red60: '#E53935',
  red50: '#F44336',
  red40: '#EF5350',
  red30: '#E57373',
  red20: '#EF9A9A',
  red10: '#FFCDD2',
  red05: '#FFEBEE',
};

const colors = {
  primaryLight: colorToken.turquoise05,
  primaryNormal: colorToken.turquoise20,
  primaryGradation: `linear-gradient(90deg, #035E7C 0%, #36A8BE 100%)`,
  active: colorToken.turquoise90,
  negative: colorToken.red50,
  cautionary: colorToken.orange50,
  positive: colorToken.green80,
  information: colorToken.blue50,
  textStrong: colorToken.common100,
  textNormal: colorToken.neutral90,
  textNeutral: colorToken.neutral70,
  textAlternative: colorToken.neutral50,
  textAssistive: colorToken.neutral40,
  textDisable: colorToken.neutral40,
  textStrongWhite: colorToken.common0,
  backgroundNormal: colorToken.neutral10,
  backgroundAlternative: colorToken.common0,
  lineNormal: colorToken.coolNeutral05,
  lineNeutral: colorToken.neutral20,
};

export default { ...colorToken, ...colors };
