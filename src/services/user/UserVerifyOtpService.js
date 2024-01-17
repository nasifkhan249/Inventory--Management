const OTPsModel = require("../../models/Users/OTPSModel");


const UserVerifyOtpService=async(req)=>{
    try {
        let email=req.params.email;
        let OTPCode=req.params.otp;
        let status=0;
        let statusUpdate=1;

        let OTPCount=await OTPsModel.aggregate([{$match:{email,otp:OTPCode,status:status}},{$count: "total"}])

        if(OTPCount.length>0){

            let OTPUpdate=await OTPsModel.updateOne({email:email,otp:OTPCode,status:status},{$set:{status:statusUpdate}},{upsert:true});
            return {status:"success",data:OTPUpdate}
        }else{
            return  {status: "fail", data: "Invalid OTP Code"}
        }
    } catch (error) {
        return {status: "fail", data: error.toString()}
    }
}

module.exports=UserVerifyOtpService;