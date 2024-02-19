const SuppliersModel = require("../../models/Suppliers/SuppliersModel");
const PurchasesModel=require("../../models/Purchases/PurchasesModel");
const CreateSuppliers = require("../../services/supplier/CreteSuppliers");
const UpdateService = require("../../services/supplier/UpdateService");
const mongoose=require("mongoose");
const ListService = require("../../services/supplier/ListService");
const DropDownService = require("../../services/supplier/DropDownService");
const DetailsByIDService = require("../../services/supplier/DetailsByIDService");
const DeleteSupplier = require("../../services/supplier/DeleteSupplier");
const objectId=mongoose.Types.ObjectId;
exports.CreateSuppliers=async (req, res) => {
    let Result= await CreateSuppliers(req,SuppliersModel)

    res.status(200).json(Result)
}

exports.UpdateSuppliers=async (req, res) => {
    let Result= await UpdateService(req,SuppliersModel,objectId)
    res.status(200).json(Result)
}

exports.SupplierList=async (req, res) => {
    let Result= await ListService(req,SuppliersModel)

    res.status(200).json(Result)
}

exports.SuppliersDropDown=async (req, res) => {
    let Result= await DropDownService(req,SuppliersModel,{_id:1,Name:1})
    res.status(200).json(Result)
}

exports.SuppliersDetailsByID=async (req, res) => {
    let Result= await DetailsByIDService(req,SuppliersModel,objectId)
    res.status(200).json(Result)
}

exports.SuppliersDelete=async (req, res) => {
    let Result= await DeleteSupplier(req,SuppliersModel,PurchasesModel,objectId)
    res.status(200).json(Result)
}