const DropDownService=async (req,DataModel,project)=>{
    try {
        let email=req.headers['email'];
        let data=await DataModel.aggregate([{$match:{UserEmail:email}},{$project:project}]);
        return{status:"success",data:data}
    }catch (e) {
        return{status:"fail",data:e}
    }
}

module.exports=DropDownService