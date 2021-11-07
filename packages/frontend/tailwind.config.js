/* eslint-disable import/no-extraneous-dependencies, global-require, sort-keys */
const colors = require('tailwindcss/colors');

const pink = {
  100: '#FFDCE6',
  300: '#FF8AAD',
  500: '#FF6492',
  700: '#E04A77',
  900: '#AE2951',
};
const violet = {
  100: '#DAC5FE',
  300: '#A876FA',
  500: '#9154F5',
  700: '#7732E6',
  900: '#512B8E',
};

module.exports = {
  purge: ['./src/**/*.{ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    boxShadow: {
      // sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
      button: '0 3px 8px var(--shadow-color)',
      'button-hover': '0 6px 16px var(--shadow-color)',
      class: '0 6px 16px var(--shadow-color)',
      'class-hover': '0 8px 24px var(--shadow-color)',
      'dropdown-desktop': '0px 6px 24px var(--shadow-color)',
      'dropdown-mobile': '0px -6px 24px var(--shadow-color)',
      none: 'none',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue: {
        100: '#C6D3FE',
        300: '#7C98FC',
        500: '#4E74FC',
        700: '#2D56EC',
        900: '#112D95',
      },
      red: {
        500: '#F5323C',
        700: '#CC0418',
        900: '#98011A',
      },
      green: {
        100: '#A7E6C8',
        300: '#44D28E',
        500: '#18B268',
        700: '#138850',
        900: '#105E39',
      },
      violet,
      pink,
      primary: pink,
    },
    fontFamily: {
      sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Segoe UI', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', '애플 SD 산돌고딕 Neo', 'Apple SD Gothic Neo', 'Noto Sans CJK KR', 'Noto Sans KR', 'Noto Sans', '본고딕', 'Source Han Sans', '나눔바른고딕', 'NanumBarunGothic', '나눔바른고딕OTF', 'NanumBarunGothicOTF', '맑은 고딕', 'Malgun Gothic', 'Helvetica Neue', 'Helvetica', 'Dotum', '돋움', 'sans-serif'],
      mono: ['IBM Plex Mono', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
    },
    fontSize: {
      code: ['.8125rem', {
        letterSpacing: '-0.03em',
        lineHeight: '1rem',
      }],
      tiny: ['.875rem', {
        letterSpacing: '-0.03em',
        lineHeight: '1rem',
      }],
      base: ['1rem', {
        letterSpacing: '-0.03em',
        lineHeight: '1.375rem',
      }],
      emph: ['1.125rem', {
        letterSpacing: '-0.03em',
        lineHeight: '1.375rem',
      }],
      sub: ['1.5rem', {
        letterSpacing: '-0.03em',
        lineHeight: 'rem',
      }],
      big: ['1.75rem', {
        letterSpacing: '-0.03em',
        lineHeight: '2rem',
      }],
      sect: ['2rem', {
        letterSpacing: '-0.03em',
        lineHeight: '2rem',
      }],
      title: ['3rem', {
        letterSpacing: '-0.03em',
        lineHeight: '3rem',
      }],
    },
    screens: {
      desktop: {
        raw: '(min-width: 1024px) and (min-height: 576px)',
      },
      'mobile-port': {
        raw: '(max-aspect-ratio: 5/8) and (max-width: 1023px), (max-aspect-ratio: 5/8) and (max-height: 575px)',
      },
      'mobile-land': {
        raw: '(min-aspect-ratio: 5/8) and (max-width: 1023px), (max-aspect-ratio: 5/8) and (max-height: 575px)',
      },
    },
    extend: {
      width: {
        fit: 'fit-content',
      },
      zIndex: {
        layout: 60,
        dialog: 70,
        'dialog-important': 80,
        toast: 90,
        'toast-important': 100,
        debug: 110,
        'debug-important': 120,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      shadow: ['active'],
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
