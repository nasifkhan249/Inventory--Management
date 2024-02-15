const CategoryModel = require("../../models/Categories/CategoriesModel");
const ProductModel=require("../../models/Products/ProductsModel");
const CreateService = require("../../services/category/CreateService");
const UpdateService = require("../../services/category/UpdateService");
const CategoryListService = require("../../services/category/CategoryListService");
const DropDownService = require("../../services/category/DropDownService");
const DetailsByIDService = require("../../services/category/DetailsByIDService");
const DeleteCategory = require("../../services/category/DeleteCategory");
const mongoose=require("mongoose");
const objectID=mongoose.Types.ObjectId;

exports.CreateCategory=async (req,res)=>{
    let result=await CreateService(req,CategoryModel);
    return res.status(200).json(result);
}

exports.UpdateCategory=async (req,res)=>{
    let result=await UpdateService(req,CategoryModel);
    return res.status(200).json(result);
}

exports.CategoryList=async (req,res)=>{
    let result=await CategoryListService(req,CategoryModel);
    return res.status(200).json(result);
}

exports.BrandDropDown=async (req,res)=>{
    let result=await DropDownService(req,CategoryModel);
    return res.status(200).json(result);
}

exports.CategoryDetailsByID=async (req,res)=>{
    let result=await DetailsByIDService(req,CategoryModel);
    return res.status(200).json(result);
}

exports.CategoryDelete=async (req,res)=>{
    let result=await DeleteCategory(req,CategoryModel,ProductModel,objectID);
    return res.status(200).json(result);
}