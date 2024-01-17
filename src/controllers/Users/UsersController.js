const UserCreateService = require("../../services/user/UserCreateService");
const UserDetailsService = require("../../services/user/UserDetailsService");
const UserLoginService = require("../../services/user/UserLoginService");

exports.Registration=async(req,res)=>{
    let result=await UserCreateService(req);
    res.status(200).json(result);
}


exports.Login=async(req,res)=>{
    let result=await UserLoginService(req);
    res.status(200).json(result);
}

exports.ProfileDetails=async(req,res)=>{
    let result=await UserDetailsService(req);
    res.status(200).json(result);
}