const OTPModel=require("../../models/Users/OTPSModel");

const UserVerifyOtpService=async (req)=>{
    try {
        let email=req.params.email;
        let otp=req.params.otp;
        let status=0;
        let statusUpdated=1;

        let OTPCount=await OTPModel.aggregate([{$match:{email:email,otp:otp,status:status}},{$count:"total"}]);
        if(OTPCount.length>0){
            let updateOtp=await OTPModel.updateOne({email:email,otp:otp},{$set:{status:statusUpdated}},{upsert:true});
            return {status:"success",data:"OTP Verify Successful"}
        }
        else{
            return {status:"fail",data:"Invalid Otp"}
        }
    }catch (e) {
        console.log(e)
        return {status:"fail",data:e}
    }
}

module.exports=UserVerifyOtpService