const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name : {
        type :String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
},{
    timestamps : true
});

let User = mongoose.model('User',schema);

module.exports = User