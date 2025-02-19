
const UserModel = require('../models/UserModel')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");
const Token = require('../models/TokenModel');
const Offer = require('../models/OfferModel');
const { v4: uuidv4 } = require('uuid'); // For generating unique token numbers
const { clearExpiredTokens } = require('../utils/OfferUtils');


const createUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        // Hash the password
        const hashPassword = await bcrypt.hash(password, 10);

        // Check for an active offer
        const activeOffer = await Offer.findOne({ isActive: true });

        let userToken = null;
        let userDiscount = null;
        let offerDetails = null;
        let offerId = null; // Initialize offerId to null

        if (activeOffer) {
            const { discountRange, startDate, endDate } = activeOffer;

            // Generate random discount within range
            const randomDiscount = Math.floor(
                Math.random() * (discountRange[1] - discountRange[0] + 1)
            ) + discountRange[0];

            // Generate a unique token
            userToken = Math.random().toString(36).substring(2, 10); // Random token

            // Set the token, discount, and offer details
            userDiscount = randomDiscount;
            offerId = activeOffer._id; // Assign offer ID if active offer exists

            offerDetails = {
                discountRange,
                startDate,
                endDate,
            };
        }

        // Create the new user
        const newUser = new UserModel({
            ...req.body,
            password: hashPassword,
            token: userToken,
            discount: userDiscount,
            offer: offerId, // Store the offer ID only if it exists
        });

        await newUser.save();

        // Response
        res.status(201).json({
            success: true,
            message: "User successfully registered",
            data: {
                email: newUser.email,
                name: newUser.name,
                token: newUser.token,
                discount: newUser.discount,
                offer: offerDetails, // Include offer details if available
            },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Internal server error", error: err.message });
    }
};


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(403).json({
                success: false,
                message: "User does not exist",
            });
        }

        // Clear expired tokens before proceeding
        await clearExpiredTokens();

        // Verify the password
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({
                success: false,
                message: "Password or email is incorrect",
            });
        }

        // Generate JWT token
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.TOKEN_SECRET,
            { expiresIn: "1h" }
        );

        res.status(201).json({
            success: true,
            message: "Successfully logged in",
            jwtToken,
            email,
            name: user.name,
            token: user.token, // Include the user's token if still valid
            discount: user.discount, // Include the discount if still valid
            role: user.role,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err.message,
        });
    }
};

const getAllUsers=async(req,res)=>{
    try{
        const allUsers=await UserModel.find({}).lean()
        console.log('all users',allUsers)
        res.status(200).json({
            success:true,
            message:"successfully get all users",
            data:allUsers
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}

const deleteUser=async(req,res)=>{
    try{
        const {id}=req.params;
        const deleteSingleUser=await UserModel.deleteOne({_id:id})
        res.status(200).json({
            success:true,
            message:"successfully deleted user",
            data:deleteSingleUser
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            success:false,
            message:"internal server error",error
            
        })
    }
}


const makeAdmin=async(req,res)=>{
    try{
        const {id}=req.params;
        const admin=await UserModel.findByIdAndUpdate(
            id,
            {$set:{role:'admin'}},
            {new:true}
        )
        if(!admin){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }
        res.status(200).json({
            success:true,
            message:"successfully added the rule",
            data:admin
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}
const googleSignIn = (req, res) => {
    try {

    } catch (err) {

    }
}

module.exports = { createUser, loginUser,getAllUsers,deleteUser,makeAdmin }