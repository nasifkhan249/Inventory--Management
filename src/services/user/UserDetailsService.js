const UsersModel=require("../../models/Users/UsersModel");
const UserDetailsService=async (req)=>{
    try {
        let email=req.headers.email;
        let data = await UsersModel.aggregate([{$match:{email:email}}]);
        return {status:"success",data:data};
    }catch (e) {
        return{status:"fail",data:e}
    }
};

module.exports=UserDetailsService;