const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    data : {
        type : Array
    },
    userId : {
        type : String
    }
});

const notes = mongoose.model('Notes' , schema);
module.exports = notes;