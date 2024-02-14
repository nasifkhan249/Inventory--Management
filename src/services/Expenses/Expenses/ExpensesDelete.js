const ExpensesDelete=async (req,DataModel,ObjectId)=>{
    try {
        let id=new ObjectId(req.params.id);
        let email=req.headers['email'];

        let QueryObject={};
        QueryObject['_id']=id;
        QueryObject["UserEmail"]=email;

        await DataModel.deleteMany(QueryObject);

        return{status:"success",data:"Expenses Delete"}
    }catch (e) {
        return{status:"fail",data:"Expenses not delete"}
    }

};
module.exports=ExpensesDelete;