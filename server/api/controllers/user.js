const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
                        message : `You have successfully registered as ${newUser.name}`,
                        user : {
                            name : newUser.name,
                            email : newUser.email
                        }
                    })
                })
            }else{
                res.status(200).json({
                    success : false,
                    message : "Please Enter a valid name or password"
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


exports.login = async (req,res)=>{
    if(!req.body.email){
        return res.json({
            success : false,
            message : "Please Enter a valid email"
        })
    }else{
        try{

            let user = await User.findOne({email : req.body.email}).select('_id name email password').exec();

            if(!user){
                res.json({
                    success : false,
                    message : "User does not exist"
                })
            }
            else{
                let match = await bcrypt.compare(req.body.password , user.password);
                if(match){
                    const token = await jwt.sign({id : user._id , name : user.name , email : user.email} , 'Luke Skywalker' , {algorithm : "HS256"})
                    res.json({
                        success : true,
                        message : `Login Successfull! Welcome ${user.name}`,
                        token : token,
                        user : {name : user.name , email : user.email}
                    })
                }
            }


        }catch(err){
            console.log(err);
            res.json({
                success : false,
                message : "Error while Posting Data to server"
            })
        }
    }
}