const UsersModel =require("../../models/Users/UsersModel");
const CreateToken=require("../../uitility/CreateToken");


const UserLoginService=async (req)=>{
    try{
        let reqBody=req.body;
        let matchStage={$match:reqBody};
        let projectStage={$project:{_id:0,email:1,firstName:1,lastName:1,mobile:1,photo:1}};
        let data=await UsersModel.aggregate([matchStage,projectStage]);
        if(data.length>0){
            let token=await CreateToken(data[0]['email']);
            return{status:"success",token:token,data:data}
        }else{
            return {status:"unauthorized"}
        }
    }catch (e) {
        return {status:"fail",data:e}
    }
}

module.exports=UserLoginService;