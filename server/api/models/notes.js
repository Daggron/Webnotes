const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    data : {
        type : String
    },
    userId : {
        type : String
    },
    title : {
        type : String
    }
});

const notes = mongoose.model('Notes' , schema);
module.exports = notes;