const { ipcRenderer } = require("electron")



document.querySelector('form').addEventListener('submit',(event)=>{
 event.preventDefault();
 
ipcRenderer.send('video:submit')

  })
