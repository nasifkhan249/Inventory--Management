const UsersModel = require("../../models/Users/UsersModel");

const UserCreateService=async(req)=>{
    try {
        let reqBody=req.body;
        let data=await UsersModel.create(reqBody);
        return {status:"success",data:data}
    } catch (error) {
        return {status:"fail",data:error.toString()}
    }
}


module.exports=UserCreateService;