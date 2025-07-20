require('dotenv').config()
const express=require('express');
const ConnectToDB =require('./Database/db.js')


const app=express();

const PORT=process.env.PORT || 3000 ;


// connect to the detabase
ConnectToDB();


// middleWare 
app.use(express.json());


app.listen(PORT,()=>{
    console.log(`Server is now running on Port : ${PORT}`);
})