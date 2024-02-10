const ListService=async (req,DataModel)=>{
    try{
        let PageNO=Number(req.params.PageNO);
        let PerPage=Number(req.params.PerPage);
        let searchValue=req.params.search;
        let skipRow=(PageNO-1)*PerPage;
        let email=req.headers['email']
        let data;
        if(searchValue!=="0"){
            let SearchRgx={$regex:searchValue,$options:"i"};
            let searchArray={$or:[{Name: SearchRgx},{Phone: SearchRgx},{Email: SearchRgx},{Address: SearchRgx}]};

            data=await DataModel.aggregate([
                {$match:{UserEmail:email}},
                {$match:searchArray},
                {
                    $facet:{
                        Total:[{$count:"count"}],
                        Rows:[{$skip:skipRow},{$limit:PerPage}]
                    }
                }
            ])
        }else{
            data=await DataModel.aggregate([
                {$match:{UserEmail:email}},{
                $facet:{
                    Total:[{$count:"count"}],
                    Rows:[{$skip:skipRow},{$limit:PerPage}]
                }
                }
            ])
        }

        return{status:"success",data:data}
    }catch (e) {
        return{status:"fail",data:e}
    }
}

module.exports=ListService