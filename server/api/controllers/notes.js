const Note = require('../models/notes');
exports.notes = async (req,res)=>{
    res.json({
        message : "I am on"
    })
}

exports.addNote = async(req,res)=>{
    if(req.body.title && req.body.data){
        console.log(req.session.userid)
            let note = new Note();
            note.title = req.body.title
            note.data = req.body.data;
            note.userId = req.session.userId;
            note.save()
            .then(()=>{
                res.json({
                    success : true,
                    message : "Posted Successfully",
                    note : {
                        title : note.title,
                        data : note.data,
                        userId : note.userId
                    }
                })
            })
            .catch((err)=>{
                console.log(err);
                res.json({
                    success : false,
                    message : "Error While Posting Note"
                })
            })
        
    }else{
        res.json({
            success : false,
            message : "Please enter all the fields"
        })
    }
}