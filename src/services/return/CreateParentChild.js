const mongoose=require("mongoose");
const CreateParentChild=async (req,ParentDataModel,ChildDataModel)=>{

    //Start session
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
            element.ReturnID=ParentCreation[0]["_id"];
        });
        let ChildCreation=await ChildDataModel.insertMany(child,{session});

        //Session commit & end the session process
        await session.commitTransaction();
        await session.endSession();

        return{status:'success',Parent:ParentCreation,Child:ChildCreation}
    }catch (e) {

        //If any error occur in the first dataBase process or second dataBase process then the session abort and the session will be end and there is no data insert the dataBase.
        await session.abortTransaction();
        await session.endSession();
        return{status:"success",data:e}
    }
}

module.exports=CreateParentChild;