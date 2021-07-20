const { ipcRenderer } = require("electron")



document.querySelector('form').addEventListener('submit',(event)=>{
 event.preventDefault();
 
ipcRenderer.send('video:submit')

  })

  ipcRenderer.on('tableData',(event,table)=>{
  
  console.log(table.Name)
  

  document.querySelector("#table").innerHTML += table.Name + '<br/>'
   })
 
 
   
   
      
   

