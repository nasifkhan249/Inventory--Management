const CreateService = require("../../services/Expenses/ExpensesTypes/CreateService");
const ExpenseTypesModel = require("../../models/Expenses/ExpenseTypesModel");
const ExpenseModel=require("../../models/Expenses/ExpensesModel");
const mongoose=require("mongoose");
const UpdateService = require("../../services/Expenses/ExpensesTypes/UpdateService");
const ListService = require("../../services/Expenses/ExpensesTypes/ListService");
const DropDownService = require("../../services/brand/DropDownService");
const DetailsByIDService = require("../../services/Expenses/ExpensesTypes/DetailsByIDService");
const DeleteExpenseType = require("../../services/Expenses/ExpensesTypes/DeleteExpenseType");
const objectId=mongoose.Types.ObjectId;
exports.CreateExpenseTypes=async (req, res) => {
    let Result= await CreateService(req,ExpenseTypesModel)
    res.status(200).json(Result)
}

exports.UpdateExpenseTypes=async (req, res) => {
    let Result= await UpdateService(req,ExpenseTypesModel,objectId)
    res.status(200).json(Result)
}

exports.ExpenseTypesList=async (req, res) => {
    let Result= await ListService(req,ExpenseTypesModel)
    res.status(200).json(Result)
}
exports.ExpenseTypesDropDown=async (req, res) => {
    let Result= await DropDownService(req,ExpenseTypesModel,{_id:1,Name:1});
    res.status(200).json(Result);
}

exports.ExpenseTypesDetailsByID=async (req, res) => {
    let Result= await DetailsByIDService(req,ExpenseTypesModel,objectId)
    res.status(200).json(Result)
}

exports.ExpenseTypesDelete=async (req, res) => {
    let Result= await DeleteExpenseType(req,ExpenseModel,ExpenseTypesModel,objectId)
    res.status(200).json(Result);
}



