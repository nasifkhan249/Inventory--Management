const CreateParentChildService = require("../../services/Sales/CreateParentChildService");
const SalesModel=require("../../models/Sales/SalesModel");
const SaleProductsModel=require("../../models/Sales/SaleProductsModel");
const ListOneJoin = require("../../services/Sales/ListOneJoin");
exports.CreateSales=async (req,res)=>{
    let result=await CreateParentChildService(req,SalesModel,SaleProductsModel)
    res.status(200).json(result);
}

exports.SalesList=async (req,res)=>{
    let result=await ListOneJoin(req,SalesModel)
    res.status(200).json(result);
}
