module.exports = {
  purge: [],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    darkSelector: '.dark-mode',
    extend: {
      colors: {
        tfh: {
          default: '#cc0f01',
          gray: '#333',
          darker: '#a3b0c9',
          darkest: '#002671',
          light: '#e9f2ff',
          black: '#00194b',
          green: '#1f9d55',
          pale: '#38a89d',
          pink: '#eb5286',
          indigo: '#6574cd',
          sunny: '#faad63',
          orange: '#f96726',
          sea: '#6cb2eb',
          'indigo-dark': '#402861',
          'sea-light': '#19bbbe',
          transparent: '#a0aec0bd'
        }
      },
      height: {
        fit: 'fit-content'
      },
      width: {
        fit: 'fit-content'
      }
    }
  },
  variants: {
    display: ['responsive'],
    inset: ['responsive', 'hover', 'focus'],
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd'
    ],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active']
  },
  plugins: [require('tailwindcss-dark-mode')()],
  corePlugins: {
    inset: true
  }
}
