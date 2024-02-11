const ListService=async (req,DataModel)=>{
    try {
        let pageNo=Number(req.params.pageNo);
        let perPage=Number(req.params.perPage);
        let searchValue=req.params.search;
        let skipRow=(pageNo-1)*perPage;
        let email=req.headers['email'];
        let data;
        if(searchValue!=="0"){
            let searchRegx={$regex:searchValue,$options:"i"};
            let searchArray={$or:[{Name: searchRegx}]};
            data=await DataModel.aggregate([
                {$match:{UserEmail:email}},
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
module.exports=ListService;