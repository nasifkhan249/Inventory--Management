const ListService=async (req,DataModel)=>{
    try {
        let PageNo=Number(req.params.PageNo);
        let PerPage=Number(req.params.PerPage);
        let searchValue=req.params.search;
        let skipRow=(PageNo-1)*PerPage;
        let UserEmail=req.headers['email'];
        let data;
        if(searchValue!=="0"){
            let SearchRgx={$regex:searchValue,$options:"i"};
            let SearchArray={$or:[{CustomerName: SearchRgx},{Phone: SearchRgx},{Email: SearchRgx},{Address: SearchRgx}]};

            data=await DataModel.aggregate([
                {$match:{UserEmail:UserEmail}},
                {$match:SearchArray},
                {
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
}

module.exports=ListService;