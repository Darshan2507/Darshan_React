const mongoose = require('mongoose');

const userSchema =new  mongoose.Schema({
        "id":{
            type:Number,
            required:true,
            unique:true
        },
        "date":{
            type:Date,
            required:true
        },
        "name":{
            type:String,
            required:true
        },
        "expense":{
            type:Number,
            required:true
        },
        "earning":{
            type:Number,
            required:true
        },
    
});


const user = mongoose.model('users',userSchema);

module.exports = user;