const { app, BrowserWindow, ipcMain } = require('electron')
const ffmpeg = require('fluent-ffmpeg')

   
  ipcMain.on('video:submit',()=>{
    createTodoWidnow()
    })

  
  app.on("ready",()=>{
      
     const mainWindow =  new BrowserWindow ({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
     })
     mainWindow.loadURL(`file://${__dirname}/index.html`)
  })
  


  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })
  
  function createTodoWidnow(){
      const toDoWindow = new BrowserWindow({
          width:350,
          height: 250,
          title: "it is add todo"
      })
      toDoWindow.loadURL(`file://${__dirname}/todo.html`)
  }