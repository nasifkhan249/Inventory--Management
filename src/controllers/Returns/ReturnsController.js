const CreateParentChild = require("../../services/return/CreateParentChild");
const ReturnsModel=require("../../models/Returns/ReturnsModel");
const ReturnProductModel=require("../../models/Returns/ReturnProductsModel");
const ListOneJoin = require("../../services/return/ListOneJoin");
const DeleteReturn = require("../../services/return/DeleteReturn");
exports.CreateReturn=async (req,res)=>{
    let result=await CreateParentChild(req,ReturnsModel,ReturnProductModel)
    res.status(200).json(result);
}

exports.ReturnsList=async (req,res)=>{
    let result=await ListOneJoin(req,ReturnsModel)
    res.status(200).json(result);
}

exports.ReturnsDelete=async (req,res)=>{
    let result=await DeleteReturn(req,ReturnsModel,ReturnProductModel)
    res.status(200).json(result);
}