const Note = require('../models/notes');
exports.notes = async (req,res)=>{
    res.json({
        message : "I am on"
    })
}

exports.addNote = async(req,res)=>{
    if(req.body.title && req.body.data){
        console.log(req.session.userid)
        let notes = await Note.findOne({userId : req.session.userid});
        if(notes){
            let note = new Note();
            note._id = notes._id;
            note.data=[...notes.data, {data : req.body.data , title : req.body.title}];
            note.userId = req.session.userid;
            Note.updateOne(notes , note)
            .then(()=>{
                res.json({
                    success : true,
                    message : "Posted Successfully",
                })
            })
            .catch((err)=>{
                console.log(err);
                res.json({
                    success : false,
                    message : "Error while Posting data"
                })
            })
        }else{
            let note = new Note();
            note.data = [{data : req.body.data , title : req.body.title}];
            note.userId = req.body.id;
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
        }
    }else{
        res.json({
            success : false,
            message : "Please enter all the fields"
        })
    }
}