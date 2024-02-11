const ProductUpdate=async (req,DataModel,objectID)=>{
        try {
            let email=req.headers['email'];
            let id=new objectID(req.params.id);
            let reqBody=req.body;
            let data=await DataModel.updateOne({UserEmail:email,_id:id},{$set:reqBody},{upsert:true});
            return{status:"success",data:data}
        }catch (e) {
            console.log(e)
            return{status:"fail",data:e}
        }
}

module.exports=ProductUpdate