const DropDownService=async (req,DataModel)=>{
    try {
        let UserEmail=req.headers['email'];
        let data=await DataModel.aggregate([{$match:{UserEmail:UserEmail}},{$project:{_id:1,CustomerName:1}}]);
        return{status:"success",data:data}
    }catch (e) {
        return{status:"fail",data:e}
    }
}

module.exports=DropDownService;