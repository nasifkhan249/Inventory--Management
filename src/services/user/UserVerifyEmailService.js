const OTPModel=require("../../models/Users/OTPSModel");
const UsersModel=require("../../models/Users/UsersModel");
const SendEmailUtility=require("../../uitility/SendEmailUtility");
const UserVerifyEmailService=async (req)=>{
    try {
        let email=req.params.email;
        let otp=Math.floor(100000+Math.random()*900000);

        let UserCount=await UsersModel.aggregate([{$match:{email:email}},{$count:"total"}]);

        if(UserCount.length>0){
            await OTPModel.updateOne({email:email},{$set:{otp:otp}},{upsert:true});
            let sendEmail=await SendEmailUtility(email,"You'r Verification code is = "+otp,"Inventory PIN Verification");
            return {status:"success",data:sendEmail}
        }else{
            return {status:"fail",data:"No user found"}
        }
    }catch (e) {
        console.log(e);
        return {status:"fail",data:e}
    }
}
module.exports=UserVerifyEmailService;