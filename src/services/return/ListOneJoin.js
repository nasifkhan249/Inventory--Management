const ListOneJoin=async (req,DataModel)=>{
    try {

        let pageNo=Number(req.params.pageNo);
        let perPage=Number(req.params.perPage);
        let searchValue=req.params.search;
        let skipRow=(pageNo-1)*perPage;
        let data;
        let email=req.headers['email'];
        let joinStage={$lookup:{from:"customers",localField:"CustomerID",foreignField:"_id",as:"customers"}};

        if(searchValue!=="0"){
            let searchRgx={$regex:searchValue,$options:"i"};
            let searchArray={$or:[{Note:searchRgx},{"customers.CustomerName":searchRgx},{"customers.Address":searchRgx},{"customers.Phone":searchRgx},{"customers.Email":searchRgx}]};
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
        }else {
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

        return{status:'success',data:data}
    }catch (e) {
        return{status:'fail',data:e}
    }
};

module.exports=ListOneJoin

