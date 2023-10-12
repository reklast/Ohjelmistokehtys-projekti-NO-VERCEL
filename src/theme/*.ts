import { theme, type ThemeConfig } from 'antd';

const lightTheme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#9747ff',
    colorTextSecondary: '#9747ff',
  },
};

const darkTheme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorBgBase: '#24232d',
    colorTextBase: '#FFFF',
    colorPrimary: '#9747ff',
},
algorithm: theme.darkAlgorithm
}

export {lightTheme, darkTheme};