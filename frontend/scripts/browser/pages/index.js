import { DashboardPage,
  SigninPage,
  SignupPage
} from 'transactions-authorization-web'
import { ContentPage } from 'transactions-cms-web'
import { AccountPage,
  VerifyPage
} from 'transactions-user-web'

import ConstructionPage from './ConstructionPage'
import HomePage from './HomePage'
import TourPage from './TourPage'

const ComponentsByName = { AccountPage,
  ContentPage,
  ConstructionPage,
  DashboardPage,
  HomePage,
  SigninPage,
  SignupPage,
  TourPage,
  VerifyPage
}

const view = { categoryName: 'page',
  ComponentsByName,
}

export const PageComponentsByName = {}
Object.keys(ComponentsByName)
  .forEach(key => {
    const pageName = `${key[0].toLowerCase()}${key.slice(1, -4)}`
    PageComponentsByName[pageName] = ComponentsByName[key]
  })

export default view
