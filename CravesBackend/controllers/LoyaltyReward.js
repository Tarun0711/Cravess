const Reward = require("../models/RewardSchema");
const User = require("../models/userModel");
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
exports.addRewards = async (req, res) => {
  const { rewardName, pointsRequired, description, expiryDate } = req.body;

  console.log(rewardName, pointsRequired, description, expiryDate);

  try {
    const newReward = new Reward({
      rewardName,
      pointsRequired,
      description,
      expiryDate,
    });

    console.log(newReward);

    await newReward.save();

    console.log("Reward saved successfully.");

    res.status(201).json({ message: "Reward created successfully." });
  } catch (err) {
    console.error("Error saving reward:", err);
    res.status(500).json({ error: err.message });
  }
};
exports.activateReward = async (req, res) => {
  const { rewardId } = req.params; // Assume rewardId is passed as a URL parameter

  try {
    const reward = await Reward.findById(rewardId);

    if (!reward) {
      return res.status(404).json({ error: "Reward not found." });
    }

    // Toggle the isActive status
    reward.isActive = !reward.isActive;
    await reward.save();

    res.status(200).json({
      message: `Reward ${
        reward.isActive ? "activated" : "deactivated"
      } successfully.`,
      reward,
    });
  } catch (err) {
    console.error("Error toggling reward status:", err);
    res.status(500).json({ error: err.message });
  }
};

exports.awardPoints = async (userId, amountSpent) => {
  try {
    // Fixed points per order
    const pointsToAward = 1;

    // Find user
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    // Award points
    user.points += pointsToAward;
    await user.save();

    return { message: "Points awarded successfully", points: user.points };
  } catch (err) {
    console.error("Error awarding points:", err.message);
    throw new Error(err.message);
  }
};

exports.redeemPoints = async (userId, points) => {
  const user = await User.findById(new ObjectId(userId));
  if (user) {
    user.points -= points;
    await user.save();
  }
};