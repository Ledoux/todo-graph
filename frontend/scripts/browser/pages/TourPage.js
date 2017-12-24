import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { ToursSection } from 'transactions-user-web'

const TourPage = props => {
  const { path,
    users
  } = props
  return (
    <main className='main page tour-page'>
      <ToursSection path={path} users={users} />
    </main>
  )
}

const shownTourUsers = createSelector(({ tour: { users }}) => users,
  users => users.filter(({ isShown }) => isShown))

export default connect(state => {
  const { setup: { api: { tourPath } } } = state
  return { path: tourPath,
    users: shownTourUsers(state)
  }
})(TourPage)
