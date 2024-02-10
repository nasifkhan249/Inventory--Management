const CategoryListService=async (req,DataModel)=>{
    try {
        let PageNo=Number(req.params.PageNo);
        let PerPage=Number(req.params.PerPage);
        let searchValue=req.params.searchValue;
        let UserEmail=req.headers['email'];
        let skipRow=(PageNo-1)*PerPage;
        let data;
        if(searchValue!=='0'){
            let SearchRegex={$regex:searchValue,$options:"i"};
            let SearchArray={$or:[{Name:SearchRegex}]}

            data=await DataModel.aggregate([
                {$match:{UserEmail:UserEmail}},
                {$match:SearchArray},{
                $facet:{
                    Total:[{$count:"count"}],
                    Rows:[{$skip:skipRow},{$limit:PerPage}]
                }
                }
            ])
        }else{
            data=await DataModel.aggregate([
                {$match:{UserEmail:UserEmail}},
                {
                    $facet:{
                        Total:[{$count:"count"}],
                        Rows:[{$skip:skipRow},{$limit:PerPage}]
                    }
                }
            ])
        }

        return {status:"success",data:data}
    }catch (e) {
        return {status:"fail",data:e}
    }
};

module.exports=CategoryListService;