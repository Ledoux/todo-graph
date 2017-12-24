import { assignInFlash } from 'transactions-interface-state'
import { setUser } from 'transactions-user-state'

function ready (config = {}) {
  const { store } = config
  const { user,
    flash
  } = store.getState()
  if (user) {
    store.dispatch(setUser(user))
  }
  if (flash) {
    store.dispatch(assignInFlash(flash))
  }
}

export default ready
