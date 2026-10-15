const express = require('express');
const mongoose=require('mongoose');

const PORT=4000;
const app=express();

//connect db
const DB_USER='root' ; 
const DB_PASSWORD='example';
const DB_PORT=27017;
   const DB_HOST='mongo';
const URI=`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`; 
mongoose.connect(URI)
.then(()=>{
    console.log("connect ot data base ....");
})
.catch((error)=>{
    console.log('faild to connect ot database ...',error);
})


app.get('/',(req,res)=>res.send('<h1>Hellow majd majd from development    </h1>'))

app.listen(PORT,()=>console.log(`app is up and running on port :${PORT}`))
