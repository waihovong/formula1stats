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
      backgroundImage: {
        'hero-landing': "url('../src/assets/images/Hero/hero.webp')"
      },
      screens: {
        'xs': { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
        'sm': { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
        'md': { min: '898px', max: '1200px' }, // Tablet (matches max: iPad Pro @ 1112px).
        'lg': { min: '1201px' }, // Desktop smallest.
        'xl': { min: '1159px' }, // Desktop wide.
        '2xl': { min: '1359px' }, // Desktop widescreen.
      },
    },

  },
  plugins: [
    require('tailwindcss-text-fill-stroke')(),
  ],
}
