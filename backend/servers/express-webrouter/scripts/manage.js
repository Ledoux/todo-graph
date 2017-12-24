const getSetup = require('../app')

getSetup().then(({ app, server }) => {
  const PORT = app.get('port')
  server.listen(PORT, function () {
    console.log('Server available at http://0.0.0.0:' + PORT)
  })
}).catch(error => console.warn(error))
