
// Importing required modules
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/userModel");
dotenv.config();

// This function is used as middleware to authenticate user requests
exports.auth = async (req, res, next) => {
  try {
    const token =
      req.cookies.token ||
      req.body.token ||
      req.header("Authorization").replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ success: false, message: `Token Missing` });
    }

    try {
      const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY);
      console.log(decode);
      req.user = decode;
    } catch (error) {
      return res
        .status(401)
        .json({ success: false, message: "token is invalid" });
    }

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: `Something Went Wrong While Validating the Token`,
    });
  }
};
exports.isUser = async (req, res, next) => {
  try {
    const userDetails = await User.findOne({ phone: req.user.phoneNumber });

    if (userDetails.role !== "User") {
      return res.status(401).json({
        success: false,
        message: "This is a Protected Route for User",
      });
    }
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `User Role Can't be Verified` });
  }
};
exports.isAdmin = async (req, res, next) => {
  try {
    const userDetails = await User.findOne({ phone: req.user.phoneNumber });

    if (userDetails.role !== "Admin") {
      return res.status(401).json({
        success: false,
        message: "This is a Protected Route for Admin",
      });
    }
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `User Role Can't be Verified` });
  }
};
exports.isRestaurant = async (req, res, next) => {
  try {
    const userDetails = await User.findOne({ phone: req.user.phoneNumber });
    console.log(userDetails);

    console.log(userDetails.role);

    if (userDetails.role !== "Restaurant") {
      return res.status(401).json({
        success: false,
        message: "This is a Protected Route for Restaurant",
      });
    }
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `User Role Can't be Verified` });
  }
};

exports.isDeliveryAgent = async (req, res, next) => {
  try {
    const userDetails = await User.findOne({ phone: req.user.phoneNumber });
    console.log(userDetails);

    console.log(userDetails.role);

    if (userDetails.role !== "DeliveryAgent") {
      return res.status(401).json({
        success: false,
        message: "This is a Protected Route for DeliveryAgent",
      });
    }
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `User Role Can't be Verified` });
  }
};