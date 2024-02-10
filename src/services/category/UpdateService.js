const mongoose=require("mongoose");
let objectId=mongoose.Types.ObjectId;
const UpdateService=async (req,DataModel)=>{
    try {
        let UserEmail=req.headers['email'];
        let id=new objectId(req.params.id);
        let reqBody=req.body;
        let data=await DataModel.updateOne({UserEmail:UserEmail,_id:id},{$set:reqBody},{upsert:true});

        return{status:"success",data:data}
    }catch (e) {
        return{status:"fail",data:e}
    }

}
module.exports=UpdateService;