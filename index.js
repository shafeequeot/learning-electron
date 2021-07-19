const { app, BrowserWindow } = require('electron')

   
  
  
  app.on("ready",()=>{
     const mainWindow =  new BrowserWindow ({})
     mainWindow.loadURL(`file://${__dirname}/index.html`)
  })
  

  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })
  