const ExpenseReportService=async (req,DataModel)=>{
    try {
        let email=req.headers['email'];
        let FormDate=req.body['FormDate'];
        let ToDate=req.body['ToDate'];

        let data=await DataModel.aggregate([
            {$match: {UserEmail:email,CreatedDate:{$gte:new Date(FormDate),$lte:new Date(ToDate)}}},
            {
                $facet:{
                    Total:[{
                        $group:{
                            _id:0,
                            TotalAmount:{$sum:"$Amount"}

                        }
                    }],
                    Rows:[{$lookup:{from:"expensetypes",localField:"TypeID",foreignField:"_id",as:"Type"}}]
                }
            }
        ])
        return {status: "success", data: data}
    }catch (e) {
        console.log(e)
        return {status: "fail", data: e}
    }
};

module.exports=ExpenseReportService;