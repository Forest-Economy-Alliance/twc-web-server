const express=require('express');
var fs = require('fs');
const { stdout } = require('process');
const shell = require('shelljs')

const app=express();
process.env.NODE_ENV = 'production';
app.set("view options", {layout: false});
app.use(express.static(__dirname + '/public'));
const PORT=80;


// static server the public folder a

app.get('/',(req,res)=>{
    // 
    res.render('/public/index.html');
})

app.get('/refresh',(req,res)=>{
//     const path = ''
// shell.cd(path)
    shell.exec('git pull origin main',
        (err, stdout, stderr) => {
        
            if (err) {
              res.send(err.toString());
              return;
            }
            
            console.log(`stderr: ${stderr}`);
            console.log(`stdout: ${stdout}`);
            res.send("Successfully Updated")
          }
    )
    
})

app.listen(PORT,()=>console.log(`SERVER at ${PORT}`))