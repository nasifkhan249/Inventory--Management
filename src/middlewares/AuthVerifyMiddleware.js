const jwt=require("jsonwebtoken");
const AuthVerifyMiddleware=async (req,res,next)=>{
    try {
        let token=req.headers['token'];
        jwt.verify(token,'12345',(err,decoded)=>{
            if(err){
                res.status(400).json({status:"unauthorized"})
            }else{
                let email=decoded['data'];
                req.headers.email=email;
                next();
            }
        })
    }catch (e) {
        return {status:"fail",data:e}
    }
};

module.exports=AuthVerifyMiddleware