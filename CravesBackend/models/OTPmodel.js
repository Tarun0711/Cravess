
const mongoose = require("mongoose");
const OTPSchema = new mongoose.Schema({
	phone: {
		type: String,
		required: true,
	},
	otp: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		expires: 60 * 5, // The OTP will be automatically deleted after 5 minutes of its creation time
	},
});

module.exports = mongoose.model("OTP", OTPSchema);
