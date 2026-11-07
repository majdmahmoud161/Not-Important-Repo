const express = require('express');
const mongoose=require('mongoose');
const redis = require('redis');
const {Client} = require('pg');
const PORT=4000;
const app=express();

//connect to redis
const REDIS_PORT=6379;
const REDIS_HOST='redis';
const redisClient = redis.createClient(
    {
        url: `redis://${REDIS_HOST}:${REDIS_PORT}`,
    }
);
redisClient.on('error',(err)=>console.log('redis client error',err));
redisClient.on('connec',()=>console.log('connected to redis...'));
redisClient.connect();




const DB_USER='root' ; 
const DB_PASSWORD='example';
const DB_PORT=5432;
   const DB_HOST='postgres';
const URI=`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`; 
const client=new Client(
    {
        connectionString:URI,
    }
);

client.connect()
.then(()=>{
    console.log("connect ot postgress data base ....");
})
.catch((error)=>{
    console.log('faild to connect ot postgres database ...',error);
})




//connect db
// const DB_USER='root' ; 
// const DB_PASSWORD='example';
// const DB_PORT=27017;
//    const DB_HOST='mongo';
// const URI=`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`; 
// mongoose.connect(URI)
// .then(()=>{
//     console.log("connect ot data base ....");
// })
// .catch((error)=>{
//     console.log('faild to connect ot database ...',error);
// })


app.get('/',(req,res)=>{
    redisClient.set('product','products...');
    res.send('<h1>Hellow majd majd from development    </h1>')
})

// لما يجي هاد الرابط روح جيب الداتا من الريديس وعرضا بالتاغ
app.get('/data', async(req,res)=>{
   const products = await redisClient.get('product')
    res.send(`<h1>Hellow majd majd from development </h1> <h2>${products}</h2>`)
})


app.listen(PORT,()=>console.log(`app is up and running on port :${PORT}`))
