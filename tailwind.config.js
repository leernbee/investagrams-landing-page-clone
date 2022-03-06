// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        serif: ['Poppins', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        'hero-bg': "url('/assets/images/main-hero-bg.jpg')",
        'signup-bg': "url('/assets/images/mid-hero-bg.jpg')",
        'download-bg': "url('/assets/images/download-app-bg.png')",
      },
      colors: {
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
        'curious-blue': {
          DEFAULT: '#25A7DF',
          50: '#C5E8F7',
          100: '#B3E0F4',
          200: '#90D2EF',
          300: '#6CC4E9',
          400: '#49B5E4',
          500: '#25A7DF',
          600: '#1A84B2',
          700: '#136081',
          800: '#0C3B50',
          900: '#05171F',
        },
      },
    },
  },
  plugins: [],
};
