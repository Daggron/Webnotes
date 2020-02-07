const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const expressSession = require('express-session');

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

//middlewares

app.use(cors());

app.use(express.json());

//express-session

app.use(expressSession({
    secret : 'Darth Vader',
    saveUninitialized:true,
    resave : true
}))

app.use('/users',require('./server/api/routes/user'));

const port = process.env.PORT || 5000;


app.listen(port,()=>{
    console.log(`running fine on ${port}`);
})