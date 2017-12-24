import React from 'react'
import { Provider } from 'react-redux'

import context from './context'
import createPage from './page'
import createRoutes from './routes'
import createStore from './store'
import createRootReducer from '../reducers'
import createRender from './render'

function createRoot (config) {

  const { App,
    history,
    Route,
    Router
  } = config

  // the setup is the mutated __SETUP__ object
  const windowSetup = (typeof window !== 'undefined' && window.__SETUP__) || {}
  const setup = Object.assign(windowSetup, {
    context: Object.assign(windowSetup.context || {}, context),
    params: { pageName: null }
  })

  const initialState = typeof window !== 'undefined' && window.__INITIAL_STATE__

  const rootReducer = createRootReducer(Object.assign({ initialState, setup },
    config))

  const store = createStore(Object.assign({ initialState,
    rootReducer,
    setup
  }, config))

  const Page = createPage()

  const render = createRender(Object.assign({ Page }, config))

  const routes = createRoutes(Object.assign({ render, setup }, config))

  const Root = () => (
    <Provider store={store}>
      <Router history={history}>
        <App>
          {
            routes && routes.map((route, index) =>
              <Route key={index} {...route} />
            )
          }
        </App>
      </Router>
    </Provider>
  )

  return { Root,
    rootProps: Object.assign({ setup, store }, config)
  }
}

export default createRoot
