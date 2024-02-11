const DetailsByIDService=async (req,DataModel,objectId)=>{
        try {
            let email=req.headers['email'];
            let id=new objectId(req.params.id);
            let data=await DataModel.aggregate([
                {$match:{UserEmail:email,_id:id}}
            ]);
            return{status:"success",data:data}
        }catch (e) {
            return{status:"fail",data:e}
        }
}
module.exports=DetailsByIDService