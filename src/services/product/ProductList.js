const ProductList=async (req,DataModel)=>{
        try {
            let pageNo=Number(req.params.pageNo);
            let perPage=Number(req.params.perPage);
            let searchValue=req.params.search;
            let skipRow=(pageNo-1)*perPage;
            let email=req.headers['email'];
            let JoinStage1={$lookup: {from: "brands", localField: "BrandID", foreignField: "_id", as: "brands"}};
            let JoinStage2= {$lookup: {from: "categories", localField: "CategoryID", foreignField: "_id", as: "categories"}};
            let data;
            if(searchValue!=="0"){
                let searchRgx={"$regex":searchValue,"$options":"i"};
                let searchArray={$or:[{Name: searchRgx},{UnitPrice: searchRgx},{Details: searchRgx},{"categories.Name":searchRgx},{"brands.Name":searchRgx}]};
                data=await DataModel.aggregate([
                    {$match:{UserEmail:email}},
                    JoinStage1,
                    JoinStage2,
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
                    JoinStage1,
                    JoinStage2,
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

module.exports=ProductList