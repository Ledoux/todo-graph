import { createResponsiveStateReducer } from 'redux-responsive'

import sass from '../utils/sass'

const { mini, sm, md, lg, xl } = sass

const browserConfig = { extraSmall: parseInt(mini),
  small: parseInt(sm),
  medium: parseInt(md),
  large: parseInt(lg),
  extraLarge: parseInt(xl)
}

const browser = createResponsiveStateReducer(browserConfig)

export default browser
