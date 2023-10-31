const express=require('express');

const app=express();

const PORT=3000;

// static server the public folder a

app.get('/',(req,res)=>{
    // 
    res.send('Hello world');
})

app.get('/refreh',(req,res)=>{
    // shellljs
    // git pull origin main
})

app.listen(PORT,()=>console.log(`SERVER at ${PORT}`))