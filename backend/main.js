const { app, PORT } = require('./index.js')


app.listen(PORT, () => {
  console.log("servidor iniciado en puerto " + PORT)
})
