const userSchema = require("../models/userModel");
const OTP = require("../models/OTPmodel");
const jwt = require('jsonwebtoken');
const otpGenerator = require("otp-generator");
const AdminDetails = require('../models/AdminDetails');
const DeliveryAgentDetails = require('../models/DeliveryAgentDetails');
const RestaurantDetails = require('../models/restaurantDetailsSchema');
const UserDetails = require('../models/userDetailsSchema');  
exports.userAuth = async (req, res) => {
  const { email, phoneNumber, name, otp, role, additionalDetail } = req.body;

  // Validation checks
  if (!email && !phoneNumber) {
    return res.status(400).json({
      success: false,
      message: "Please provide either an email or phone number.",
    });
  }
  
  if (!otp) {
    return res.status(400).json({
      success: false,
      message: "Please provide the OTP.",
    });
  }

  try {
    // Find the most recent OTP for the email or phoneNumber
    const response = await OTP.findOne({ $or: [{ email }, { phoneNumber }] })
      .sort({ createdAt: -1 });

    if (!response || otp !== response.otp) {
      // OTP not found or doesn't match
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid.",
      });
    }

    // Delete the OTP after successful validation
    await OTP.findByIdAndDelete(response._id);

    // Find the user by phoneNumber
    let user = await userSchema.findOne({ phone: phoneNumber });

    const token = jwt.sign({ role: user?.role || role }, process.env.JWT_SECRET_KEY, {
      expiresIn: '1h' // expires in 1 hour
    });

    if (user) {
      // User exists, proceed with login
      return res.status(200).cookie('token', token).json({
        success: true,
        message: "Login successful.",
        data: user,
        token
      });
    } else {
      // Ensure phoneNumber is defined before creating a user
      if (!phoneNumber) {
        return res.status(400).json({
          success: false,
          message: "Phone number cannot be undefined.",
        }); 
      }

      // Determine the additionalDetail schema based on the role
      let additionalDetailsData;
      if (role === "Admin") {
        additionalDetailsData = new AdminDetails(additionalDetail);
      } else if (role === "DeliveryAgent") {
        additionalDetailsData = new DeliveryAgentDetails(additionalDetail);
      } else if (role === "Restaurant") {
        additionalDetailsData = new RestaurantDetails(additionalDetail);
      } else if  (role === "User") {
        additionalDetailsData = new UserDetails(additionalDetail);
      }

      // User doesn't exist, create a new one
      user = new userSchema({
        phone: phoneNumber,
        role,
        email: email || "NA",
        userName: name || "NA",
        city: "NA",
        country: "NA",
        addressLine1: "NA",
        image: "https://thumbs.dreamstime.com/b/happy-cheaf-fried-chicken-vector-illustration-vector-illustration-happy-cheaf-fried-chicken-eps-112535209.jpg",
        additionalDetail: additionalDetailsData,
      });

      await user.save();

      return res.status(200).cookie('token', token).json({
        success: true,
        message: "User registered and login successful.",
        data: user,
        token
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Error in authentication.",
    });
  }
};


exports.sendOtp = async (req, res) => {
  const { phoneNumber } = req.body;
  try {
    // Generate a 6-digit numeric OTP
    let otp;
    let existingOtp;

    do {
      otp='0000'
      // otp = otpGenerator.generate(4, {
      //   upperCaseAlphabets: false,
      //   lowerCaseAlphabets: false,
      //   specialChars: false,
      //   digits: true,
      // });
      existingOtp = await OTP.findOne({ otp: otp });
    } while (existingOtp);

    // Create OTP payload
    const otpPayload = { phone: phoneNumber, otp };
    const otpBody = await OTP.create(otpPayload);

    // Log the OTP (you might want to remove this in production)
    console.log(`OTP sent to ${phoneNumber}: ${otp}`);
    console.log(otpBody);
    // Respond with success
    res.status(200).json({
      success: true,
      message: "OTP Sent Successfully",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Error sending OTP",
      success: false,
    });
  }
};
