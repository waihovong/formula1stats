/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    textFillColor: theme => theme('borderColor'),
    textStrokeColor: theme => theme('borderColor'),
    textStrokeWidth: theme => theme('borderWidth'),
    paintOrder: {
      'fsm': { paintOrder: 'fill stroke markers' },
      'fms': { paintOrder: 'fill markers stroke' },
      'sfm': { paintOrder: 'stroke fill markers' },
      'smf': { paintOrder: 'stroke markers fill' },
      'mfs': { paintOrder: 'markers fill stroke' },
      'msf': { paintOrder: 'markers stroke fill' },
    },
    variants: { // all the following default to ['responsive']
      textFillColor: ['responsive'],
      textStrokeColor: ['responsive'],
      textStrokeWidth: ['responsive'],
      paintOrder: ['responsive'],
    },
    extend: {
      fontFamily: {
        navigation: ['Montserrat', 'sans-serif'],
        header: ['Montserrat', 'sans-serif'],
        standard: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-text-fill-stroke')(),
  ],
}
