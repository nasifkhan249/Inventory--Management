const mongoose=require("mongoose");
const objectId=mongoose.Types.ObjectId;
const DeleteSale=async (req,ParentDataModel,ChildDataModel)=>{
    //Start the session for transaction roll back
    const session=await mongoose.startSession();
    try {
        //Begin the transaction
        await session.startTransaction();

        let DeletedID=new objectId(req.params.id);
        let email=req.headers['email'];

        let ParentQueryObject={_id:DeletedID,UserEmail:email};



        let ChildQueryObject={SaleID:DeletedID,UserEmail: email};


        let ParentCreation=await ParentDataModel.deleteMany(ParentQueryObject).session(session);


        let ChildCreation=await ChildDataModel.deleteMany(ChildQueryObject).session(session);

        await session.commitTransaction();
        await session.endSession();

        return {status:"success",Parent:ParentCreation,Child:ChildCreation}
    }catch (e) {
        await session.abortTransaction();
        await session.endSession();
        return{status:"fail",data:e}
    }
}

module.exports=DeleteSale