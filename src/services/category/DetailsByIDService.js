const mongoose=require("mongoose");
const objectId=mongoose.Types.ObjectId;
const DetailsByIDService=async (req,DataModel)=>{
    try {
        let UserEmail=req.headers['email'];
        let id=new objectId(req.params.id);

        let data=await DataModel.aggregate([{$match:{UserEmail:UserEmail,_id:id}}]);
        return {status:"success",data:data}
    }catch (e) {
        console.log(e)
        return {status:"fail",data:e}
    }
};

module.exports=DetailsByIDService;