import React from 'react'

import links from './links'
import { getRedirectPathname } from './redirection'

export default function createRender ({ Page,
  PageComponentsByName,
  Redirect
}) {
  function render (router, config = {}) {
    // unpack
    const { match: { params } } = router
    const { pageName } = params
    const HomePage = PageComponentsByName.home
    // redirect
    const redirectPathName = getRedirectPathname && getRedirectPathname(router, config)
    if (redirectPathName) {
      return <Redirect to={redirectPathname} />
    }
    // page
    const PageComponent = PageComponentsByName[pageName]
    const pageElement = PageComponent
      ? <PageComponent {...params} />
      : <HomePage wrongPageName={pageName} />
    if (!PageComponent) {
      console.warn(`Did not find a page like ${pageName}`)
    }
    return (
      <Page params={params}>
        {pageElement}
      </Page>
    )
  }
  return render
}
