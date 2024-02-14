const ExpensesModel=require("../../models/Expenses/ExpensesModel")
const CreateService = require("../../services/Expenses/Expenses/CreateService");
const UpdateService = require("../../services/Expenses/Expenses/UpdateService");
const ListOneJoinService = require("../../services/Expenses/Expenses/ListOneJoinService");
const DetailsByIDService = require("../../services/Expenses/Expenses/DetailsByIDService");
const mongoose=require("mongoose");
const ExpensesDelete = require("../../services/Expenses/Expenses/ExpensesDelete");
const objectId=mongoose.Types.ObjectId;
exports.CreateExpenses=async (req, res) => {
    let Result= await CreateService(req,ExpensesModel);
    res.status(200).json(Result)
}

exports.UpdateExpenses=async (req, res) => {
    let Result= await UpdateService(req,ExpensesModel,objectId);
    res.status(200).json(Result)
}

exports.ListExpenses=async (req, res) => {
    let Result= await ListOneJoinService(req,ExpensesModel);
    res.status(200).json(Result)
}

exports.DetailsExpenses=async (req, res) => {
    let Result= await DetailsByIDService(req,ExpensesModel,objectId);
    res.status(200).json(Result)
}

exports.DeleteExpenses=async (req, res) => {
    let Result= await ExpensesDelete(req,ExpensesModel,objectId);
    res.status(200).json(Result)
}

