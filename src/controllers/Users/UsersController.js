const UserCreateService = require("../../services/user/UserCreateService");
const UserDetailsService = require("../../services/user/UserDetailsService");
const UserLoginService = require("../../services/user/UserLoginService");
const UserUpdateService = require("../../services/user/UserUpdateService");
const UserVerifyEmailService = require("../../services/user/UserVerifyEmailService");
const UserVerifyOtpService = require("../../services/user/UserVerifyOtpService");

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

exports.ProfileUpdate=async(req,res)=>{
    let result=await UserUpdateService(req);
    res.status(200).json(result);
}

exports.RecoveryVerifyEmail=async(req,res)=>{
    let result=await UserVerifyEmailService(req);
    res.status(200).json(result);
}

exports.RecoveryVerifyOTP=async(req,res)=>{
    let result=await UserVerifyOtpService(req);
    res.status(200).json(result);
}