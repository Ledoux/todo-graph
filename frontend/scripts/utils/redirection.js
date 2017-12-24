export const redirectToHome = () => '/home'
export const redirectToHomeWithWarning = ({ url }) => {
  const text = `The url ${url} is not valid`
  return `/home?modal=warning&icon=exclamation&text=${encodeURIComponent(text)}`
}
