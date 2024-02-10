const CreateService=async (req,DataModel)=>{
    try {
        let postBody=req.body;
        postBody.UserEmail=req.headers['email'];

        let data=await DataModel.create(postBody);
        return{status:"success",data:data}
    }catch (e) {
        console.log(e);
        return{status:"fail",data:e}
    }
}

module.exports=CreateService;