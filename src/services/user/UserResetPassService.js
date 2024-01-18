const OTPsModel = require("../../models/Users/OTPSModel");
const UsersModel = require("../../models/Users/UsersModel");

const UserResetPassService=async(req)=>{
    try {
        let email=req.body['email'];
        let OTPCode=req.body['otp'];
        let NewPass=req.body['password'];
        let statusUpdate=1;
        let statusCount=0;

        let OTPUsedCount=await OTPsModel.aggregate([{$match:{email:email,otp:OTPCode,status:statusUpdate}},{$count:"total"}]);

        if(OTPUsedCount.length>0){
            let PassUpdate=await UsersModel.updateOne({email:email},{$set:{password:NewPass}},{upsert:true});
            await OTPsModel.updateOne({email:email},{$set:{status:statusCount,otp:0}},{upsert:true});
            return {status: "success", data: PassUpdate}
        }else{
            return {status: "fail", data: "Invalid Request"}
        }
    } catch (error) {
        return {status: "fail", data: error.toString()}
    }
}

module.exports=UserResetPassService