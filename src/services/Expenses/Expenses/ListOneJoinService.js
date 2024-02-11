const listOneJoinService=async (req,DataModel)=>{
    try {
        let pageNo=Number(req.params.pageNo);
        let perPage=Number(req.params.perPage);
        let searchValue=req.params.search;
        let email=req.headers['email'];
        let skipRow=(pageNo-1)*perPage;
        let data;
        let joinStage={$lookup:{from:"expensetypes",localField:"TypeID",foreignField:"_id",as:"Type"}};

        if(searchValue!=="0"){
            let searchRgx={$regex:searchValue,$options:"i"};
            let searchArray={$or:[{'Type.Name':searchRgx},{Note:searchRgx}]};
            data=await DataModel.aggregate([
                {$match:{UserEmail:email}},
                joinStage,
                {$match:searchArray},
                {
                    $facet:{
                        Total:[{$count:"count"}],
                        Rows:[{$skip:skipRow},{$limit:perPage}]
                    }
                }
            ])
        }else{
            data=await DataModel.aggregate([
                {$match:{UserEmail:email}},
                joinStage,
                {
                    $facet:{
                        Total:[{$count:"count"}],
                        Rows:[{$skip:skipRow},{$limit:perPage}]
                    }
                }
            ])
        }
        return{status:"success",data:data}
    }catch (e) {
        return{status:"fail",data:e}
    }
}

module.exports=listOneJoinService