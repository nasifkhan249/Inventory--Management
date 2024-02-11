const ProductDropDown=async (req,DataModel,Project)=>{
        try {
            let email=req.headers['email'];
            let data=await DataModel.aggregate([{$match:{UserEmail:email}}]);
            return{status:"success",data:data}
        }catch (e) {
            return{status:"fail",data:e}
        }
}

module.exports=ProductDropDown;