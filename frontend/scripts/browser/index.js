require('../utils/styles')
import React from 'react'
import ReactDOM from 'react-dom'

import root from './web.browser.root'
const { Root, rootProps } = root
import init from '../utils/init'
import ready from '../utils/ready'

// READY
ready().then(() => {
  // INIT
  init && init(rootProps)
  // RENDER
  const reactDivElement = document.getElementById('app_div')
  if (!reactDivElement) {
    return
  }
  if (!module.hot) {
    // production
    ReactDOM.render(<Root {...rootProps} />, reactDivElement)
  } else {
    // dev
    const AppContainer = require('react-hot-loader').AppContainer
    ReactDOM.render(
      <AppContainer>
        <Root {...rootProps} />
      </AppContainer>
      , reactDivElement)
    module.hot.accept('./web.browser.root', () => {
      const nextRoot = require('./web.browser.root').default
      const NextRoot = nextRoot.Root
      ReactDOM.render(
        <AppContainer>
          <NextRoot {...rootProps} />
        </AppContainer>,
        reactDivElement
      )
    })
  }
})
