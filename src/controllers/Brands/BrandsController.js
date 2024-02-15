const BrandModel=require("../../models/Brands/BrandsModel");
const ProductModel=require("../../models/Products/ProductsModel");
const CreateService = require("../../services/brand/CreateService");
const UpdateService = require("../../services/brand/UpdateService");
const BrandListService = require("../../services/brand/brandList");
const DropDownService = require("../../services/brand/DropDownService");
const DetailsByIDService = require("../../services/brand/DetailsByIDService");
const DeleteBrand = require("../../services/brand/DeleteBrand");
const mongoose=require("mongoose");
const objectID=mongoose.Types.ObjectId;


exports.CreateBrand=async (req,res)=>{
    let result=await CreateService(req,BrandModel);
    return res.status(200).json(result);
}

exports.UpdateBrand=async (req,res)=>{
    let result=await UpdateService(req,BrandModel);
    return res.status(200).json(result);
}

exports.BrandList=async (req,res)=>{
    let result=await BrandListService(req,BrandModel);
    return res.status(200).json(result);
}

exports.BrandDropDown=async (req,res)=>{
    let result=await DropDownService(req,BrandModel,{_id:1,Name:1});
    return res.status(200).json(result);
}

exports.BrandDetailsByID=async (req,res)=>{
    let result=await DetailsByIDService(req,BrandModel);
    return res.status(200).json(result);
}

exports.BrandDelete=async (req,res)=>{
    let result=await DeleteBrand(req,BrandModel,ProductModel,objectID);
    return res.status(200).json(result);
}