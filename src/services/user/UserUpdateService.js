const UsersModel = require("../../models/Users/UsersModel")

const UserUpdateService=async(req)=>{
    try {
        let email=req.headers.email;
        let updateData={...req.body};
        delete updateData.email;
        let data=await UsersModel.updateOne({email:email},{$set:updateData},{upsert:true});
        return {status:"success",data:data}
    } catch (error) {
        return {status: "fail", data: error.toString()}
    }
}


module.exports=UserUpdateService;




