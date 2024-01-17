const express=require('express');
const UserController=require("../controllers/Users/UsersController");
const AuthVerifyMiddleware = require('../middlewares/AuthVerifyMiddleware');

const router=express.Router();


//User Profile
router.post("/Registration",UserController.Registration);
router.post("/Login",UserController.Login);
router.get("/ProfileDetails",AuthVerifyMiddleware,UserController.ProfileDetails)


module.exports=router;