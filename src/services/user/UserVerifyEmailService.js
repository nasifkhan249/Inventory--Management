const OTPsModel = require("../../models/Users/OTPSModel");
const UsersModel = require("../../models/Users/UsersModel");
const SendEmailUtility = require("../../uitility/SendEmailUtility");

const UserVerifyEmailService=async(req)=>{
    try {
        let email=req.params.email;
        let OTPCode=Math.floor(100000+Math.random()*900000);
        let EmailText="Your verification code is  "+OTPCode;
        let EmailSubject="Inventory PIN Verification"

        let UserCount=await UsersModel.aggregate([{$match:{email:email}},{$count:"total"}]);

        if(UserCount.length>0){

            await OTPsModel.updateOne({email:email},{$set:{otp:OTPCode}},{upsert:true});

            let SendEmail=await SendEmailUtility(email,EmailText,EmailSubject);

            return {status:"success",data:SendEmail}
        } else{
            return {status: "fail", data: "No User Found"}
        }
    } catch (error) {
        return {status: "fail", data: error.toString()};
    }
}

module.exports=UserVerifyEmailService