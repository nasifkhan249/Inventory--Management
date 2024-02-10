const UsersModel=require("../../models/Users/UsersModel");
const UserUpdateService=async (req)=>{
    try {
        let email=req.headers.email;
        let reqBody=req.body;
        delete reqBody.email
        let data=await UsersModel.updateOne({email:email},{$set:reqBody},{upsert:true});
        return {status:"success",data:data}
    }catch (e) {
        return {status:"fail",data:e}
    }
}

module.exports=UserUpdateService;