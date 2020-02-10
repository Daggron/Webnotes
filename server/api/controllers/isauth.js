const jwt = require('jsonwebtoken');

exports.isAuth = async (req,res,next)=>{
    const token = req.header('token');
    // console.log(req.headers);
    // console.log(token);
    try{

        const success = await jwt.verify(token , 'Luke Skywalker' , {algorithms : "HS256"});
        if(success){
            let decode = await jwt.decode(token,'Luke Skywalker');
            console.log(decode.id);
            req.session.userid = decode.id;
            next();
        }else{
            res.json({
                success : false,
                message : 'Invalid Token'
            })
        }

    }catch(err){
        res.json({
            success : false,
            message : "Invalid Token"
        })
    }
}