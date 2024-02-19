const DeleteSupplier=async (req,DataModelSupplier,DataModelPurchases,objectId)=>{
    try {
        let email=req.headers['email'];
        let id=new objectId(req.params.id);

        let checkId=await DataModelPurchases.aggregate([
            {$match:{SupplierID:id}}
        ]);

        if(checkId.length>0){
            return{status:"associate",data: "Associate with Purchases"}
        }else{
            let QueryObject={};
            QueryObject['_id']=id;
            QueryObject['UserEmail']=email;

            let data=await DataModelSupplier.deleteMany(QueryObject);
            return{status:"success",data:data}
        }
    }catch (e) {
        return{status:"fail",data:e}
    }
};

module.exports=DeleteSupplier;