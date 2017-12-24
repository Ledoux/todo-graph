import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import serverConfig from './server.config'
import root from '../frontend/scripts/browser/server.browser.root'
const { Root, rootProps } = root

// RENDER
function serverSideRender (stats) {
  const renderedBody = ReactDOMServer.renderToString(<Root {...rootProps} />)
  const bodyHTML = `<div id="app_div">
      ${renderedBody}
    </div>`
  const fileDir = path.join(serverConfig.contentBase, '_body.html')
  // fs.writeFileSync(fileDir, bodyHTML)
}

export default serverSideRender
