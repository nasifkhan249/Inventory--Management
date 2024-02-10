const mongoose=require("mongoose");
const ObjectId=mongoose.Types.ObjectId;
const DetailsByIDService=async (req,DataModel)=>{
    try {
        let id=new ObjectId(req.params.id);
        let UserEmail=req.headers.email;
        let data=await DataModel.aggregate([{$match:{UserEmail:UserEmail,_id:id}}]);
        return {status:"success",data:data}
    }catch (e) {
        return{status:"fail",data:e}
    }
}

module.exports=DetailsByIDService;