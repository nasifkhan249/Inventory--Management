const UpdateService=async (req,DataModel)=>{
    try {
        let UserEmail=req.headers['email'];
        let postBody=req.body;

        let id=req.params.id;

        let data=await DataModel.updateOne({_id:id,UserEmail:UserEmail},{$set:postBody},{upsert:true});

        return {status:"success",data:data}
    }catch (e) {
        console.log(e);
        return {status:"fail",data:e}
    }
}

module.exports=UpdateService;