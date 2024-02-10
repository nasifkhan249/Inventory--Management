const UsersModel = require("../../models/Users/UsersModel");

const UserCreateService=async(req)=>{
    try {
        let postBody=req.body;
        let data=await UsersModel.create(postBody);
        return{status:"success",data:data}

    } catch (e) {
        return {status:"fail",data:e}
    }
}

module.exports=UserCreateService;