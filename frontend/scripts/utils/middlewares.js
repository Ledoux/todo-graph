import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'

function createMiddlewares ({ history }) {
  const routerMiddleware = createRouterMiddleware(history)
  const sagaMiddleware = createSagaMiddleware()
  sagaMiddleware._name = 'sagaMiddleware'
  return [
    routerMiddleware,
    sagaMiddleware
  ]
}

export default createMiddlewares
