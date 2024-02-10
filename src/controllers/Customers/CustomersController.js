const CreateService =require("../../services/customer/CreateService");
const CustomersModel =require( "../../models/Customers/CustomersModel");
const UpdateService = require("../../services/customer/UpdateService");
const ListService = require("../../services/customer/ListService");


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
    let result=await ListService(req,CustomersModel);
    res.status(200).json(result);
}