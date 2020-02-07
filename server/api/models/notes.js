const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title : {
        type :String,
        required : true,
    },
    data : {
        type : Array
    },
    userid : {
        type : String
    }
});

const notes = mongoose.model('Notes' , schema);
module.exports = notes;