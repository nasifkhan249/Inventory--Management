const CreateService=async (req,DataModel)=>{
   try {
       let reqBody=req.body;
       reqBody.UserEmail=req.headers['email'];
       let email=reqBody.UserEmail;
       reqBody.Email=email

       let data=await DataModel.create(reqBody);
       return {status:"success",data:data}
   }catch (e) {
       return {status:"fail",data:e}
   }
};

module.exports=CreateService