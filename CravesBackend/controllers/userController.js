const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

require("dotenv").config();

exports.registerUser = async (req, res) => {
  const { userName, password, userEmail, phone, role } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ userEmail });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user instance
    user = new User({
      userName,
      password,
      userEmail,
      phone,
      role,
    });

    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save the user to the database
    await user.save();

    // Prepare the payload for the JWT token
    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    // Issue JWT token using the secret key from the environment variable
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });
    user.token = token;
    await user.save();

    res.status(201).json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};
exports.loginUser = async (req, res) => {
  const { userEmail, password } = req.body;

  try {
    const user = await User.findOne({ userEmail });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    const token = jwt.sign(payload, "jwtSecret", { expiresIn: "1h" });
    user.token = token;
    await user.save();

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.changePassword = async (req, res) => {
  const { userEmail, oldPassword, newPassword } = req.body;

  try {
    let user = await User.findOne({ userEmail });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }

    // Hash new password and update
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);

    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};
