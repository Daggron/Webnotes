const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');

const uri = process.env.Db;
mongoose.connect(uri,{
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true
})

let db = mongoose.connection;

db.once('open',()=>{
    console.log('Db on fire');
});

db.on('error',(err)=>{
    console.log(err);
})




const port = process.env.PORT || 5000;


app.listen(port,()=>{
    console.log(`running fine on ${port}`);
})