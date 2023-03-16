const jwt=require(`jsonwebtoken`);
const dotenv=require("dotenv");
const mongoose=require('mongoose');
const express=require('express');
const app=express()

dotenv.config({path:'./config.env'});
require('./db/conn')

app.use(express.json());
//const User=require('./model/userSchema');

const router=require('./router/auth')


const DB=process.env.DATABASE;
const PORT=process.env.PORT;

app.use("/api",router)

// app.get('/register',(req,res)=>{
//     res.send('signin ');
// })

// app.get('/pdatepass',(req,res)=>{
// res.send('')
// })
      


app.listen(PORT,()=>
 {
     console.log(`server is running at port no ${PORT}`);
 })




