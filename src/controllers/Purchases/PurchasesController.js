const PurchasesModel=require("../../models/Purchases/PurchasesModel");
const PurchaseProductsModel=require('../../models/Purchases/PurchaseProductsModel');
const CreatePurchases = require("../../services/PurchasesService/CreatePurchases");
const ListOneJoin = require("../../services/PurchasesService/ListOneJoin");
const DeletePurchases = require("../../services/PurchasesService/DeletePurchases");
exports.PurchasesCreate=async (req,res)=>{
    let result=await CreatePurchases(req,PurchasesModel,PurchaseProductsModel);
    res.status(200).json(result);
}

exports.PurchasesList=async (req,res)=>{
    let result=await ListOneJoin(req,PurchasesModel);
    res.status(200).json(result);
}

exports.PurchasesDelete=async (req,res)=>{
    let result=await DeletePurchases(req,PurchasesModel,PurchaseProductsModel);
    res.status(200).json(result);
}