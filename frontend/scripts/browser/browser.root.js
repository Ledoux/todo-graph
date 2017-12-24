import { Redirect, Route } from 'react-router-dom'
import { ConnectedRouter, routerReducer } from 'react-router-redux'

import App from './App'
import contentView from './contents'
import dashboardView from './dashboards'
import modalView from './modals'
import pageView, { PageComponentsByName } from './pages'
import taskView from './tasks'
import tutorials from './tutorials'
import createRoot from '../utils/root'

const createBrowserRoot = history => createRoot({ App,
  history,
  PageComponentsByName,
  Redirect,
  Route,
  Router: ConnectedRouter,
  routerReducer,
  tutorials,
  views: [ contentView,
    dashboardView,
    modalView,
    pageView,
    taskView
  ]
})

export default createBrowserRoot
