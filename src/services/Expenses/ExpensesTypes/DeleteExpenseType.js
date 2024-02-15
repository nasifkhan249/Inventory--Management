const DeleteExpenseType=async (req,DataModelExpense,DataModelExpenseType,objectID)=>{
    try {
        let id=new objectID(req.params.id);
        let email=req.headers['email'];
        let checkId=await DataModelExpense.aggregate([
            {$match:{TypeID:id}}
        ]);

        if(checkId.length>0){
            return{status: "associate", data: "Associate with Expenses"}
        }else{
            let QueryObject={};
            QueryObject['_id']=id;
            QueryObject['UserEmail']=email;
            let data=await DataModelExpenseType.deleteMany(QueryObject);
            return {status:"success",data:data};
        }
    }catch (e) {
        console.log(e);
        return {status:"fail",data:e};
    }
};
module.exports=DeleteExpenseType;