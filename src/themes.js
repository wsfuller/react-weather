import { FontWeights } from '@fluentui/react';

const breakpoints = {
  small: '320',
  medium: '480',
  large: '640',
  xLarge: '1024',
  xxLarge: '1366',
  xxxLarge: '1920',
};

export const lightTheme = {
  breakpoints: {
    ...breakpoints,
  },
  fontWeights: {
    ...FontWeights,
  },
  palette: {
    themePrimary: '#148214',
    themeLighterAlt: '#f2faf2',
    themeLighter: '#cbebcb',
    themeLight: '#a2daa2',
    themeTertiary: '#58b458',
    themeSecondary: '#259125',
    themeDarkAlt: '#127512',
    themeDark: '#0f630f',
    themeDarker: '#0b490b',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#595959',
    neutralSecondary: '#373737',
    neutralPrimaryAlt: '#2f2f2f',
    neutralPrimary: '#000000',
    neutralDark: '#151515',
    black: '#0b0b0b',
    white: '#ffffff',
  },
};

export const darkTheme = {
  breakpoints: {
    ...breakpoints,
  },
  fontWeights: {
    ...FontWeights,
  },
  palette: {
    themePrimary: '#169e16',
    themeLighterAlt: '#010601',
    themeLighter: '#041904',
    themeLight: '#072f07',
    themeTertiary: '#0d5f0d',
    themeSecondary: '#138b13',
    themeDarkAlt: '#26a826',
    themeDark: '#3fb53f',
    themeDarker: '#68c968',
    neutralLighterAlt: '#2b2b2b',
    neutralLighter: '#333333',
    neutralLight: '#414141',
    neutralQuaternaryAlt: '#4a4a4a',
    neutralQuaternary: '#515151',
    neutralTertiaryAlt: '#6f6f6f',
    neutralTertiary: '#c8c8c8',
    neutralSecondary: '#d0d0d0',
    neutralPrimaryAlt: '#dadada',
    neutralPrimary: '#ffffff',
    neutralDark: '#f4f4f4',
    black: '#f8f8f8',
    white: '#212121',
  },
};
