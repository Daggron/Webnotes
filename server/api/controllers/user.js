const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.register = async (req,res)=>{
    if(!req.body.email){
        res.status(200).json({
           success : false,
           message : "Please Enter a valid mail"
        })
    }
    else{
        try{
        let user = await User.findOne({email : req.body.email});
        if(user){
            return res.status(200).json({
                success : false,
                message : "User already exist"
            })
        }else{
            if(req.body.name && req.body.password){
                let newUser = new User();
                newUser.email = req.body.email;
                newUser.name = req.body.name;
                let salt = await bcrypt.genSalt(10);
                let hash = await bcrypt.hash(req.body.password , salt);
                newUser.password = hash;
                newUser.save().then(()=>{
                    res.status(200).json({
                        success : true,
                        message : 'You have registered successfully'
                    })
                })
            }
        }
        }catch(err){
            console.log(err);
            res.send(500).json({
                success : false,
                message : 'Error while Posting data to server'
            })
        }
    }
}