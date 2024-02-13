const mongoose=require("mongoose");
const objectID=mongoose.Types.ObjectId;
const DeleteReturn=async (req,ParentDataModel,ChildDataModel)=>{

    const session=await mongoose.startSession();

    try {

        await session.startTransaction();


        let DeleteID=new objectID(req.params.id);
        let email=req.headers['email'];

        let ParentQueryObject={};
        ParentQueryObject['_id']=DeleteID;
        ParentQueryObject['UserEmail']=email;

        let ChildQueryObject={};
        ChildQueryObject['ReturnID']=DeleteID;
        ChildQueryObject['UserEmail']=email;

        let Parent=await ParentDataModel.deleteMany(ParentQueryObject).session(session);

        let Child=await ChildDataModel.deleteMany(ChildQueryObject).session(session);

        await session.commitTransaction();
        await session.endSession();

        return{status:"success",Parent:Parent,Child:Child}

    }catch (e) {
        console.log(e)
        await session.abortTransaction();
        await session.endSession();
        return {status:"fail",data:e}
    }
};

module.exports=DeleteReturn