/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main-100': '#e7eded',
        'main-200': '#dde4e4',
        'main-300': '#ced9d9',
        'main-400': '#c0d8d8',
        'main-500': '#0e8080',
        'main-600': '#0f7070'
      },
      colors: {
        'txt-100': '#9fa7aa',
        'txt-200': '#7c7c7c',
        'txt-300': '#32323d',
        'txt-400': '#0e8080'
      },
      fontSize: {
        'fnt-100': '12px',
        'fnt-200': '14px'
      },
      keyframes: {
        'slide-right': {
          '0%': {
            '-webkit-transform': 'translateX(-500px);',
            transform: 'translateX(-500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-left-1': {
          '0%': {
            '-webkit-transform': 'translateX(500px);',
            transform: 'translateX(500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-left-2': {
          '0%': {
            '-webkit-transform': 'translateX(500px);',
            transform: 'translateX(500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        }
      },
      animation: {
        'slide-right': 'slide-right 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left-1': 'slide-left-1 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left-2': 'slide-left-2 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;'
      }
    },
    screens: {

    }
  },
  plugins: [],
}


