const BrandListService=async (req,DataModel)=>{
    try {
        let UserEmail=req.headers['email'];
        let pageNo=Number(req.params.pageNo);
        let perPage=Number(req.params.perPage);
        let searchValue=req.params.searchValue;
       
        let skipRow=(pageNo-1)*perPage;
        let data;

        if(searchValue!=="0"){
            let searchRegex={$regex:searchValue,$options:"i"};
            let searchArray={$or: [{Name:searchRegex}]};
            data=await DataModel.aggregate([
                {$match:{UserEmail:UserEmail}},
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
                {$match:{UserEmail:UserEmail}},
                {
                    $facet:{
                        Total:[{$count:"count"}],
                        Rows:[{$skip:skipRow},{$limit:perPage}]
                    }
                }
            ])
        };
        return{status:"success",data:data}
    }catch (e) {
        console.log(e)
        return{status:"fail",data:e}
    }
}

module.exports=BrandListService;