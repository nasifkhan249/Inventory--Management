const CreateService =require("../../services/customer/CreateService");
const CustomersModel =require( "../../models/Customers/CustomersModel");
const SalesModel =require("../../models/Sales/SalesModel");
const ReturnsModel=require("../../models/Returns/ReturnsModel")
const UpdateService = require("../../services/customer/UpdateService");
const ListService = require("../../services/customer/ListService");
const DropDownService = require("../../services/customer/DropDownService");
const DetailsByIDService = require("../../services/customer/DetailsByIDService");
const deleteCustomer = require("../../services/customer/DeleteCustomer");
const mongoose=require("mongoose");
const objectId=mongoose.Types.ObjectId;


exports.CreateCustomer=async (req,res)=>{
    let result=await CreateService(req,CustomersModel);

    res.status(200).json(result);
}

exports.UpdateCustomers=async (req,res)=>{
    let result=await UpdateService(req,CustomersModel);
    res.status(200).json(result);
}

exports.CustomersList=async (req,res)=>{
    let result=await ListService(req,CustomersModel);
    res.status(200).json(result);
}

exports.CustomersDropDown=async (req,res)=>{
    let result=await DropDownService(req,CustomersModel);
    res.status(200).json(result);
}

exports.CustomersDetailsByID=async (req,res)=>{
    let result=await DetailsByIDService(req,CustomersModel);
    res.status(200).json(result);
}

exports.CustomerDelete=async (req,res)=>{
    let result=await deleteCustomer(req,CustomersModel,SalesModel,ReturnsModel,objectId);
    res.status(200).json(result);
}