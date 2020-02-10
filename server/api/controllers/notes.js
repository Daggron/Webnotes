const Note = require('../models/notes');


exports.addNote = async(req,res)=>{
    console.log(req.body)
    if(req.body.title && req.body.data){
        console.log(req.session.userid)
        console.log('here')
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

exports.notes = async (req,res)=>{
    Note.find({})
    .select('id data title userId')
    .exec()
    .then((data)=>{
        res.status(200).json({
            success : true,
            data : data
        })
    }).catch((err)=>{
        console.log(err)
        res.status(200).json({
            success : false,
            message : "Error while getting data"
        })
    })
}


exports.notesId = async (req,res)=>{
    Note.findById(req.params.id)
    .select('id data title userId')
    .exec()
    .then((data)=>{
        res.status(200).json({
            success : true,
            data : data
        })
    }).catch((err)=>{
        console.log(err)
        res.status(200).json({
            success : false,
            message : "Error while getting data"
        })
    })
}

exports.notesAuthor = async (req,res)=>{
    Note.find({userId : req.body.userId})
    .select('id data title userId')
    .exec()
    .then((data)=>{
        res.status(200).json({
            success : true,
            data : data
        })
    }).catch((err)=>{
        console.log(err)
        res.status(200).json({
            success : false,
            message : "Error while getting data"
        })
    })
}