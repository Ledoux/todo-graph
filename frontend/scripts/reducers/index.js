import { combineReducers } from 'redux'
import { createAuthorization } from 'transactions-authorization-state'
import { createBlockers,
  createTracking,
  createViewer,
  flash,
  information,
  loading,
  modal
} from 'transactions-interface-state'
import { tour,
  user
} from 'transactions-user-state'
import { explorations,
  form,
  pipeline,
  slugid
} from 'transactions-cms-state'
import { createNormalizer,
  createRequest,
  createRouter
} from 'transactions-redux-react'
import { createGuide } from 'transactions-tooltip-state'

import browser from './browser'
import navigation from './navigation'
import submit from './submit'

export function createRootReducer (config = {}) {
  // unpack
  const { history,
    initialState,
    routerReducer,
    tutorials,
    views
  } = config
  const { context, description } = config.setup
  const collectionNames = description && description.collectionNames
  // reducers
  const authorization = createAuthorization(initialState.authorization)
  const blockers = createBlockers(history)
  const guide = createGuide(tutorials)
  const normalizer = createNormalizer(description, {
    isDeleteJoin: false
  })
  const setup = (state = config.setup || {}) => state
  const request = createRequest()
  const router = createRouter(routerReducer)
  const tracking = createTracking(context)
  const viewer = createViewer(views, { collectionNames })

  const rootReducer = combineReducers({
    authorization,
    blockers,
    browser,
    explorations,
    flash,
    form,
    guide,
    information,
    loading,
    modal,
    navigation,
    normalizer,
    pipeline,
    request,
    router,
    setup,
    slugid,
    submit,
    tracking,
    tour,
    user,
    viewer
  })
  return rootReducer
}

export default createRootReducer
