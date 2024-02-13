const mongoose=require("mongoose");
const CreateParentChildService=async (req,ParentDataModel,ChildDataModel)=>{

    //Start Session
    const session=await mongoose.startSession();
    try {
        //Begin Transaction
        await session.startTransaction();
        let email=req.headers['email'];

        //First DataBase Process
        let parent=req.body['parent'];
        parent.UserEmail=email;
        let ParentCreation=await ParentDataModel.create([parent],{session});

        //Second DataBase Process
        let child=req.body['child'];
        child.forEach((element)=>{
            element.UserEmail=email;
            element.SaleID=ParentCreation[0]['_id'];
        });
        let ChildCreation=await ChildDataModel.insertMany(child,{session});

        //Commit Transaction and end the session
        await session.commitTransaction();
        await session.endSession();
        return {status:"success",Parent:ParentCreation,Child:ChildCreation};
    }catch (e) {
        //if any error occur then the session abort and end the session
        await session.abortTransaction();
        await session.endSession();
        return{status:"fail",data:e}
    }
}

module.exports=CreateParentChildService;