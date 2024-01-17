// Importing the UsersModel and CreateToken utility
const UsersModel = require("../../models/Users/UsersModel");
const CreateToken = require("../../uitility/CreateToken");

// Defining the UserLoginService function
const UserLoginService = async (req) => {
    try {
        // Creating MongoDB aggregation stages for matching and projecting data
        let matchStage = { $match: req.body };
        let projectStage = { $project: { _id: 0, email: 1, firstName: 1, lastName: 1, mobile: 1, photo: 1 } };

        // Performing aggregation using UsersModel with the defined stages
        let data = await UsersModel.aggregate([matchStage, projectStage]);

        // Checking if any data is found
        if (data.length > 0) {
            // Generating a token using the user's email with CreateToken utility
            let token = await CreateToken(data[0]['email']);
            // Returning success status, token, and user data
            return { status: "success", token: token, data: data[0] };
        } else {
            // Returning unauthorized status if no data is found
            return { status: "unauthorized" };
        }
    } catch (error) {
        // Returning fail status and the error message if an error occurs
        return { status: "fail", data: error.toString() };
    }
}

// Exporting the UserLoginService function
module.exports = UserLoginService;


// Importing the jwt library
const jwt = require("jsonwebtoken");

// Defining a middleware function to check and verify tokens
module.exports = async (req, res, next) => {
    try {
        // Extracting the token from the request headers
        let Token = req.headers['token'];

        // Verifying the token with a secret key ("12345" in this case)
        jwt.verify(Token, "12345", (err, decoded) => {
            if (err) {
                // If verification fails, sending an unauthorized status response
                res.status(200).json({ status: "unauthorized" });
            } else {
                // If verification is successful, extracting email from the decoded data
                let email = decoded['data'];
                // Setting the email in the request headers and proceeding to the next middleware or route
                req.headers.email = email;
                next();
            }
        })
    } catch (error) {
        // Returning fail status and the error message if an error occurs
        return { status: "fail", data: error.toString() };
    }
}



const UsersModel = require("../../models/Users/UsersModel");

const UserUpdateService = async (req) => {
    try {
        // Extracting the email from the request headers
        let email = req.headers.email;

        // Creating a new object excluding the email field from req.body
        const updateData = { ...req.body };
        delete updateData.email;

        // Updating user data in the UsersModel collection based on the email
        // Using updateOne to update or insert the document if it doesn't exist (upsert: true)
        let data = await UsersModel.updateOne({ email: email }, { $set: updateData }, { upsert: true });

        // Returning a success status along with the update result
        return { status: "success", data: data };
    } catch (error) {
        // Returning a fail status along with the error message if an error occurs
        return { status: "fail", data: error.toString() };
    }
}

// Exporting the UserUpdateService function
module.exports = UserUpdateService;
