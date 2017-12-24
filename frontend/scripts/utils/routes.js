import React from 'react'

import links from './links'
import { redirectToHome,
  redirectToHomeWithWarning
} from './redirection'
import { getPageProps } from './page'

function createRoutes (config = {}) {
  const { Redirect,
    render,
    setup
  } = config
  const api = setup.api || {}
  return [
    // ROOT HOME REDIRECT
    {
      exact: true,
      path: '/',
      render: () => <Redirect to={redirectToHome()} />
    }
  ].concat(links.map(path => {
    return {
      exact: true,
      path,
      render: router => render(router, config)
    }
  })).concat([
    // WRONG TOO MANY SLASHES URLS WARNING REDIRECTS
    {
      exact: true,
      path: `${links.slice(-1)[0]}/*`,
      render: ({ match }) =>
        <Redirect to={redirectToHomeWithWarning(match)} />
    }
  ]).concat(Object.keys(api)
    // APIS HOME WARNING REDIRECTS
    .map(path => {
      return { path: `${path}/*`,
        render: ({ match }) =>
          <Redirect to={redirectToHomeWithWarning(match)} />
      }
    })
  )
}

export default createRoutes
