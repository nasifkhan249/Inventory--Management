const DeleteBrand=async (req,DataModelBrand,DataModelProduct,objectID)=>{
    try {
        let id=new objectID(req.params.id);
        let email=req.headers['email'];

        //This process check in the product model that if there should be any found brand id which id is connected by the product model
        let CheckId=await DataModelProduct.aggregate([
            {$match:{BrandID:id}}
        ]);

        //If check that any brand id connected with any product then return associate if not then inside the else block and deleted the specific id which user selected for delete the id.

        if(CheckId.length>0){
            return{ status: "associate", data: "Associate with Expenses"}
        }else{
            let queryObject={};
            queryObject['_id']=id;
            queryObject['UserEmail']=email;

            let data=await DataModelBrand.deleteMany(queryObject);
            return {status:"success",data:data}
        }
    }catch (e) {
        console.log(e)
        return {status:"fail",data:e}
    }
}

module.exports=DeleteBrand;