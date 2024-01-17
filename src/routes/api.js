const express=require('express');
const UserController=require("../controllers/Users/UsersController");
const AuthVerifyMiddleware = require('../middlewares/AuthVerifyMiddleware');

const router=express.Router();


//User Profile
router.post("/Registration",UserController.Registration);
router.post("/Login",UserController.Login);
router.post("/ProfileUpdate",AuthVerifyMiddleware,UserController.ProfileUpdate);
router.get("/ProfileDetails",AuthVerifyMiddleware,UserController.ProfileDetails);
router.get("/RecoveryVerifyEmail/:email",UserController.RecoveryVerifyEmail);
router.get("/RecoveryVerifyOTP/:email/:otp",UserController.RecoveryVerifyOTP);


module.exports=router;