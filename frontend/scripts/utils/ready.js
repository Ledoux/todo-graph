function ready () {
  return new Promise(function (resolve) {
    var state = document.readyState
    if (state === 'complete' ||
      state === 'loaded' ||
      state === 'interactive') {
      return resolve()
    }
    document.addEventListener('DOMContentLoaded', function () {
      resolve()
    })
  })
}

export default ready
