import createRootSaga from '../sagas'

function createRun({ initialState,
  middlewares,
  setup,
  store
}) {
  // ROOT
  const rootSaga = createRootSaga ({ initialState, setup, store })
  // SAGA
  middlewares.find(middleware => middleware._name === 'sagaMiddleware')
    .run(rootSaga)
}

export default createRun
