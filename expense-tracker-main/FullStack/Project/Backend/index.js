const express = require('express');
const app = express();
const port = process.env.PORT || 2000;
const userRouter = require('./Routes/user');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


mongoose.connect(process.env.MONGO_URL).then(()=>{
    
    app.use(cors());
    app.use(express.urlencoded());
    app.use(express.json());
    
    
    app.use('/user',userRouter);
    
    app.listen(port,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log(`Server is running on port ${port}`)
        }
    })
}).catch((err)=>{
    console.log("Error in connecting to database err :" + err);
})

