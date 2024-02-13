const mongoose=require("mongoose");
const CreatePurchases=async (req,parentDataModel,childDataModel)=>{
    // Create Transaction Session
    const session=await mongoose.startSession();
    try {
        //Begin Transaction
        await session.startTransaction();

        //First DataBase Process
        let Parent=req.body['parent'];
        Parent.UserEmail=req.headers['email'];

        let ParentCreation=await parentDataModel.create([Parent],{session});


        //Second DataBase Process
        let Childs=req.body['childs'];
        await Childs.forEach((element)=>{
            element.PurchaseID=ParentCreation[0]['_id'];
            element.UserEmail=req.headers['email'];
        });
        let ChildCreations=await childDataModel.insertMany(Childs,{session});
        //Transaction Success
        await session.commitTransaction();
        session.endSession();
        return{status:"success",Parent:ParentCreation,Childs:ChildCreations}
    }catch (e) {
      await session.abortTransaction();
      session.endSession();
      return {status: "fail", data: e}
    }
}

module.exports=CreatePurchases