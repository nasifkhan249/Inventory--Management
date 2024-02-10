const CreateService=async (req,DataModel)=>{
    try {
        let UserEmail=req.headers.email;
        let postBody=req.body;
        postBody.UserEmail=UserEmail;

        let data=await DataModel.create(postBody);

        return{status:"success",data:data}
    }catch (e) {
        console.log(e);
        return{status:"fail",data:e}
    }
}

module.exports=CreateService;