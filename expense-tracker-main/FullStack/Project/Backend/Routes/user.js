const express = require('express');
const userRouter = express.Router();
const {addEntry,showEntry,editEntry,deleteEntry} = require('../Controllers/user');

userRouter.post('/add',addEntry);
userRouter.get('/show',showEntry);
userRouter.patch('/edit/:id',editEntry);
userRouter.delete('/delete/:id',deleteEntry);




module.exports = userRouter