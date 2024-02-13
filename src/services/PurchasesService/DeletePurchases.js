const mongoose=require("mongoose");
const DeletePurchases=async (req,ParentDataModel,ChildDataModel)=>{
    const session=await mongoose.startSession();
    try {
        await session.startTransaction();

        //Parent Creation
        let DeleteID=req.params.id;
        let email=req.headers['email'];

        let ParentQueryObject={};
        ParentQueryObject._id=DeleteID;
        ParentQueryObject.UserEmail=email;

        let ChildQueryObject={};
        ChildQueryObject.PurchaseID=DeleteID;
        ChildQueryObject.UserEmail=email;


        //First Process

        let ParentCreation=await ParentDataModel.deleteMany(ParentQueryObject).session(session);


        //Second process

        let ChildCreation=await ChildDataModel.deleteMany(ChildQueryObject).session(session);

        await session.commitTransaction();
        await session.endSession();

        return {status:"success",Parent:ParentCreation,Child:ChildCreation}
    }catch (e) {
        await session.abortTransaction();
        await session.endSession();
        return{status:"success",data:e}
    }
}

module.exports=DeletePurchases;