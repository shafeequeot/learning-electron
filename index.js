const { app, BrowserWindow, ipcMain, ipcRenderer } = require('electron')

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(`${__dirname}/sql/mySql.db`);

let mainWindow;
  ipcMain.on('video:submit',()=>{
   // createTodoWidnow()
  
    try {
        
            // open the database
           
              db.each("SELECT * FROM Name", function(err, row) {
                
                mainWindow.send('tableData',row)
            })
      //alert("seccess")
  
  
      } catch (error) {
         // alert("errrrrrrror")
        console.error('Unable to connect to the database:', error);
      }
    })
  
  app.on("ready",()=>{
      
      mainWindow =  new BrowserWindow ({
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