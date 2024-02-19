const ExpensesModel=require("../../models/Expenses/ExpensesModel");
const ExpenseReportService = require("../../services/report/ExpenseReportService");
exports.Expense=async (req,res)=>{
    let result=await ExpenseReportService(req,ExpensesModel);
    res.status(200).json(result);
}