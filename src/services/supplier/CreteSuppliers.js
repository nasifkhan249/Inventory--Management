const CreateSuppliers=async (req,DataModel)=>{
    try {
        let email=req.headers['email'];
        let reqBody=req.body;
        reqBody.UserEmail=email;
        reqBody.Email=email;
        let data=await DataModel.create(reqBody);
        return{status:"success",data:data}
    }catch (e) {
        return{status:"fail",data:e}
    }
}

module.exports=CreateSuppliers