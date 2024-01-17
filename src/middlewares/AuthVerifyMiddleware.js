const jwt =require("jsonwebtoken");

module.exports=async(req,res,next)=>{
    try {
        let Token=req.headers['token'];
        jwt.verify(Token,"12345",(err,decoded)=>{
            if(err){
                res.status(200).json({status:"unauthorized"});
            }else{
                let email=decoded['data'];
                req.headers.email=email;
                next()
            }
        })
    } catch (error) {
        return {status:"fail",data:error.toString()};
    }
}