
const liveReload = require('livereload')
const connectLiveReload = require('connect-livereload')


function devServer(app){
  const liveReloadServer = liveReload.createServer()
  liveReloadServer.watch("build")

  liveReloadServer.server.once("connection", ()=>{
    setTimeout(()=>{
      liveReloadServer.refresh("/")
    }, 100)
  })

  app.use(connectLiveReload())
}

module.exports = devServer