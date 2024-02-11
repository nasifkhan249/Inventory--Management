const ProductModel=require("../../models/Products/ProductsModel");
const CreateProduct=require("../../services/product/CreateProduct");
const ProductList=require("../../services/product/ProductList");
const ProductByIDDetails=require("../../services/product/ProductByIDDetails");
const ProductDropDown=require("../../services/product/ProductDropDown");
const ProductUpdate=require("../../services/product/ProductUpdate");
const mongoose=require("mongoose");
const objectId=mongoose.Types.ObjectId;


exports.CreateProducts=async (req, res) => {
    let Result= await CreateProduct(req,ProductModel);
    res.status(200).json(Result)
}

exports.UpdateProducts=async (req, res) => {
    let Result=await ProductUpdate(req,ProductModel,objectId)
    res.status(200).json(Result)
}

exports.ProductsList=async (req, res) => {
    let Result=await ProductList(req,ProductModel)
    res.status(200).json(Result)
}


exports.ProductsDetailsByID=async (req, res) => {
    let Result= await ProductByIDDetails(req,ProductModel,objectId)
    res.status(200).json(Result)
}


exports.ProductsDropDown=async (req, res) => {
    let Result= await ProductDropDown(req,ProductModel,{_id:1,Name:1})
    res.status(200).json(Result)
}