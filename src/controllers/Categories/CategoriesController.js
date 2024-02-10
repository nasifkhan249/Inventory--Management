const CreateService = require("../../services/category/CreateService");
const CategoryModel = require("../../models/Categories/CategoriesModel");
const UpdateService = require("../../services/category/UpdateService");
const CategoryListService = require("../../services/category/CategoryListService");
const DropDownService = require("../../services/category/DropDownService");
const DetailsByIDService = require("../../services/category/DetailsByIDService");

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