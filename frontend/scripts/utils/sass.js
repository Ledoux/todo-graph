const kebabCase = require('lodash.kebabcase')

const colorsByName = {
  veryLightBlue: '#8b98ab',
  lightBlue: '#1acfff',
  mediumBlue: '#33aece',

  lightGreen: '#bbe265',
  mediumGreen: '#70c946',
  darkGreen: '#63D180',

  veryVeryLightGrey: '#fcfcfc',
  veryLightGrey: '#f7f7f7',
  lightGrey: '#c5c5c5',
  mediumGrey: '#dcdddc',
  darkGrey: '#777777',
  veryDarkGrey: '#4a4a4a',

  red: '#DD2C00'
}

 const sass = Object.assign(colorsByName, {
  mini: '425px',
  sm: '768px',
  md: '1024px',
  lg: '1440px',
  xl: '2560px',
  backgroundColor: colorsByName.veryLightGrey,
  border: `1px solid ${colorsByName.lightGrey}`,
  borderRadius: '0.25rem',
  buttonBorderRadius: '2rem',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
  boxShadowHover: '0 0 10px rgba(0,0,0,0.4)',
  darkFontColor: colorsByName.veryDarkGrey,
  fontFamily: '"Source Sans Pro", sans-serif',
  headerHeight: '5rem',
  identityColor: colorsByName.darkGreen,
  lightFontColor: colorsByName.lightGrey,
  lightIdentityColor: '$light-green',
  middleFontColor: colorsByName.darkGrey,
  totalBackgroundImage: 'linear-gradient(to bottom, $very-light-grey, white)',
  opacityTransition: 'all 1s ease-out',
  resizeTransition: 'all 0.4s ease-out'
})

Object.keys(sass)
  .forEach(key => {
    const value =  sass[key]
    const kebabKey = kebabCase(key)
    if (kebabKey !== key) {
      sass[kebabKey] = value
      delete sass[key]
    }
  })

module.exports = sass
