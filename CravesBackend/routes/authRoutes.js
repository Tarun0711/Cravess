
// Import the required modules
const express = require("express");
const router = express.Router();
const userAuth = require("../controllers/authController");


// router.post("/sendotp", userAuth.sendOtp);
// router.post("/signin", userAuth.userAuth);


const rateLimit = require("express-rate-limit");

// Rate limit for OTP requests: 5 requests per hour per IP
const otpRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  // max: 5, // Limit each IP to 5 requests per windowMs
  message:
    "Too many OTP requests from this IP, please try again after an hour.",
});

// Rate limit for user authentication requests: 10 requests per hour per IP
const authRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // Limit each IP to 10 requests per windowMs
  message:
    "Too many authentication requests from this IP, please try again after an hour.",
});

router.post("/sendotp", otpRateLimit, userAuth.sendOtp);
router.post("/signin", authRateLimit, userAuth.userAuth);

module.exports = router;

