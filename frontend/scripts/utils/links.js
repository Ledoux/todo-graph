const links = [
  '/:pageName',
  '/:pageName/:entityOrCollectionName',
  '/:pageName/:entityOrCollectionName/:slug'
]

export const menuLinks = [
  {
    getIsVisible: ({ active, visibleModes }) => {
      return active && visibleModes && visibleModes.length > 0
    },
    path: '/dashboard',
    label: 'Dashboard'
  }
]

export default links
