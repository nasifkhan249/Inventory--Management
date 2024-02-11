const express=require('express');
const UserController=require("../controllers/Users/UsersController");
const BrandController=require("../controllers/Brands/BrandsController");
const CategoryController=require("../controllers/Categories/CategoriesController");
const CustomerController=require("../controllers/Customers/CustomersController");
const SupplierController = require("../controllers/Suppliers/SuppliersController");
const ExpensesTypeController=require("../controllers/Expenses/ExpenseTypesController");
const ExpensesController=require("../controllers/Expenses/ExpensesController");
const ProductsController=require("../controllers/Products/ProductsController");
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



//Expenses Types Profile
router.post('/create-expense-types',AuthVerifyMiddleware,ExpensesTypeController.CreateExpenseTypes);
router.post('/update-expense-types/:id',AuthVerifyMiddleware,ExpensesTypeController.UpdateExpenseTypes)
router.get("/expense-types-list/:pageNo/:perPage/:search",AuthVerifyMiddleware,ExpensesTypeController.ExpenseTypesList);
router.get("/drop-down-expense-types",AuthVerifyMiddleware,ExpensesTypeController.ExpenseTypesDropDown);
router.get("/expense-types-details/:id",AuthVerifyMiddleware,ExpensesTypeController.ExpenseTypesDetailsByID);
//Expenses Types Profile

//Expenses Profile
router.post('/create-expense',AuthVerifyMiddleware,ExpensesController.CreateExpenses);
router.post('/update-expense/:id',AuthVerifyMiddleware,ExpensesController.UpdateExpenses)
router.get("/expense-list/:pageNo/:perPage/:search",AuthVerifyMiddleware,ExpensesController.ListExpenses);
router.get("/drop-down-expense",AuthVerifyMiddleware,ExpensesTypeController.ExpenseTypesDropDown);
router.get("/expense-details/:id",AuthVerifyMiddleware,ExpensesController.DetailsExpenses);
//Expenses Profile


// Products Profile
router.post("/create-products",AuthVerifyMiddleware,ProductsController.CreateProducts);
router.post("/update-products/:id",AuthVerifyMiddleware,ProductsController.UpdateProducts);
router.get("/product-list/:pageNo/:perPage/:search",AuthVerifyMiddleware,ProductsController.ProductsList);
router.get("/product-detail/:id",AuthVerifyMiddleware,ProductsController.ProductsDetailsByID);
router.get("/product-drop-down",AuthVerifyMiddleware,ProductsController.ProductsDropDown);
// Products Profile
module.exports=router;