const DeleteProduct=async (req,DataModelProduct,DataModelPurchaseProduct,DataModelReturnProduct,DataModelSaleProduct,objectId)=>{
    try {
        let email=req.headers['email'];
        let id=new objectId(req.params.id);

        let CheckPurchase=await DataModelPurchaseProduct.aggregate([{$match:{ProductID:id}}]);
        let CheckReturn=await DataModelReturnProduct.aggregate([{$match:{ProductID:id}}]);
        let CheckSale=await DataModelSaleProduct.aggregate([{$match:{ProductID:id}}]);

        if(CheckPurchase.length>0){
            return{status:"associate",data:"Associate with Purchases"}
        }else if(CheckReturn.length>0){
            return{status:"associate",data:"Associate with Return"}
        }else if(CheckSale.length>0){
            return{status:"associate",data:"Associate with Sale"}
        }else{
            let QueryObject={};
            QueryObject['_id']=id;
            QueryObject['UserEmail']=email;

            let data=await DataModelProduct.deleteMany(QueryObject);
            return {status:"success",data:data}
        }
    }catch (e) {
        return {status:"fail",data:e}
    }
};

module.exports=DeleteProduct;