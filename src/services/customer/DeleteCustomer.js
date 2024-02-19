const deleteCustomer=async (req,DataModelCustomer,DataModelSale,DataModelReturn,objectId)=>{
   try {
       let email=req.headers['email'];
       let id=new objectId(req.params.id);
       const checkId=await DataModelSale.aggregate([
           {$match:{CustomerID:id}}
       ]);
       const checkID=await DataModelReturn.aggregate([
           {$match:{CustomerID:id}}
       ])
       if(checkId.length>0){
           return{ status: "associate",data: "Associate with Sales"}
       }else if(checkID.length>0){
           return{ status: "associate",data: "Associate with Return"}
       }else{
           let QueryObject={};
           QueryObject['_id']=id;
           QueryObject['UserEmail']=email;

           let data=await DataModelCustomer.deleteMany(QueryObject);
           return {status:"success",data:data}
       }
   }catch (e) {
       return {status:"fail",data:e}
   }
}

module.exports=deleteCustomer;