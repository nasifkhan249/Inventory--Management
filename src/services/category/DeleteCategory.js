const DeleteCategory=async (req,DataModelCategory,DataModelProduct,objectID)=>{
    try {
        let email=req.headers['email'];
        let id=new objectID(req.params.id);


        //This checkID check that if there should be found any category id connected into any product .if connected then the checkId variable length should be 1;

        let checkId=await DataModelProduct.aggregate([
            {$match:{CategoryID:id}}
        ]);

        //If any match id found then the output show associate with product.if no id match in the product model then the category data will be deleted.
        if(checkId.length>0){
            return{status: "associate", data: "Associate with product"}
        }else {
            let QueryObject={};
            QueryObject['_id']=id;
            QueryObject['UserEmail']=email;
            let data=await DataModelCategory.deleteMany(QueryObject);

            return{status:"success",data:data}
        }
    }catch (e) {
        console.log(e);
        return{status:"fail",data:e}
    }
};
module.exports=DeleteCategory;