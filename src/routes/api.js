const express=require('express');
const UserController=require("../controllers/Users/UsersController");
const BrandController=require("../controllers/Brands/BrandsController");
const CategoryController=require("../controllers/Categories/CategoriesController");
const CustomerController=require("../controllers/Customers/CustomersController");
const SupplierController = require("../controllers/Suppliers/SuppliersController");
const AuthVerifyMiddleware = require('../middlewares/AuthVerifyMiddleware');


const router=express.Router();


//User Profile
router.post("/sign-up",UserController.Registration);
router.post("/sign-in",UserController.Login);
router.get("/profile-details",AuthVerifyMiddleware,UserController.ProfileDetails);
router.post("/profile-update",AuthVerifyMiddleware,UserController.ProfileUpdate);

router.get("/verify-email/:email",UserController.RecoveryVerifyEmail);
router.get("/verify-otp/:email/:otp",UserController.RecoveryVerifyOTP);
router.post("/reset-pass",UserController.RecoveryVerifyPass);
//User Profile

//Brand Profile
router.post("/create-brand",AuthVerifyMiddleware,BrandController.CreateBrand);
router.post("/update-brand/:id",AuthVerifyMiddleware,BrandController.UpdateBrand);
router.get("/list-brand/:pageNo/:perPage/:searchValue",AuthVerifyMiddleware,BrandController.BrandList);
router.get("/drop-down-brand",AuthVerifyMiddleware,BrandController.BrandDropDown);
router.get("/brand-details/:id",AuthVerifyMiddleware,BrandController.BrandDetailsByID);
//Brand Profile

//Category Profile
router.post("/create-category",AuthVerifyMiddleware,CategoryController.CreateCategory);
router.post("/update-category/:id",AuthVerifyMiddleware,CategoryController.UpdateCategory);
router.get("/list-category/:PageNo/:PerPage/:searchValue",AuthVerifyMiddleware,CategoryController.CategoryList);
router.get("/drop-down-brand",AuthVerifyMiddleware,CategoryController.BrandDropDown);
router.get("/category-details/:id",AuthVerifyMiddleware,CategoryController.CategoryDetailsByID);
//Category Profile


//Customer Profile
router.post("/create-customer",AuthVerifyMiddleware,CustomerController.CreateCustomer);
router.post("/update-customer/:id",AuthVerifyMiddleware,CustomerController.UpdateCustomers);
router.get("/customer-list/:PageNo/:PerPage/:search",AuthVerifyMiddleware,CustomerController.CustomersList);
router.get("/drop-down-customer",AuthVerifyMiddleware,CustomerController.CustomersDropDown);
router.get("/customer-details/:id",AuthVerifyMiddleware,CustomerController.CustomersDetailsByID);
//Customer Profile

//Supplier Profile
router.post("/create-supplier",AuthVerifyMiddleware,SupplierController.CreateSuppliers);
router.post("/update-supplier/:id",AuthVerifyMiddleware,SupplierController.UpdateSuppliers);
router.get("/supplier-list/:PageNO/:PerPage/:search",AuthVerifyMiddleware,SupplierController.SupplierList);
router.get("/drop-down-supplier",AuthVerifyMiddleware,SupplierController.SuppliersDropDown);
router.get("/supplier-details/:id",AuthVerifyMiddleware,SupplierController.SuppliersDetailsByID);
//Supplier Profile


module.exports=router;