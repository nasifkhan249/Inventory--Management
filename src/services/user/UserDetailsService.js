const UsersModel = require("../../models/Users/UsersModel");

const UserDetailsService=async(req)=>{
    try {
        let email=req.headers['email'];
        let data=await UsersModel.aggregate([{$match:{email:email}}]);
        return {status:"success",data:data}
    } catch (error) {
        return {status: "fail", data: error.toString()}
    }
}


module.exports=UserDetailsService;