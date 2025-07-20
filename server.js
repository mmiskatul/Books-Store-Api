require('dotenv').config()
const express=require('express');
const ConnectToDB =require('./Database/db.js')

const bookRoutes=require('./Routes/book-routes.js');


const app=express();

const PORT=process.env.PORT || 3000 ;


// connect to the detabase
ConnectToDB();


// middleWare 
app.use(express.json());


// routes
app.use('/api/books',bookRoutes);




app.listen(PORT,()=>{
    console.log(`Server is now running on Port : ${PORT}`);
})

//"start": "node server.js",

