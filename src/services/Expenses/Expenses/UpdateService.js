const UpdateService=async (req,DataModel,objectId)=>{
        try {
            let email=req.headers['email'];
            let reqBody=req.body;
            let id=new objectId(req.params.id);
            let data=await DataModel.updateOne({UserEmail:email,_id:id},{$set:reqBody},{upsert:true});
            return{status:"success",data:data}
        }catch (e) {
            return{status:"fail",data:e}
        }
}

module.exports=UpdateService;