const OTPModel=require("../../models/Users/OTPSModel");
const UsersModel=require('../../models/Users/UsersModel');

const UserResetPassService=async (req)=>{
    try {
        let email=req.body['email'];
        let otp=req.body['otp'];
        let NewPass=req.body['password'];
        let status=0;
        let statusUpdated=1;
        let code=0;

        let OTPCount=await OTPModel.aggregate([{$match:{email:email,otp:otp,status:statusUpdated}},{$count:"total"}]);
        if(OTPCount.length>0){
            await UsersModel.updateOne({email:email},{$set:{password:NewPass}},{upsert:true});
            await OTPModel.updateOne({email:email,otp:otp},{$set:{status:status,otp:code}},{upsert:true});
            return{status:"success",data:"Password Update Successful"}
        }else{
            return{status:"fail",data:"Invalid Request"}
        }
    }catch (e) {
        console.log(e);
        return{status:"fail",data:e}
    }
}

module.exports=UserResetPassService