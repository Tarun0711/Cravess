const express = require("express");
const router = express.Router();

// Import necessary controllers
const {
  addRewards,
  activateReward,
  redeemPoints
} = require("../controllers/LoyaltyReward");

// Route to add rewards
router.post("/addRewards", addRewards);

// Route to activate a reward
router.patch('/api/rewards/:rewardId/activate', activateReward);

// Route to redeem points for a reward
router.patch('redeem/:rewardId/:userId', redeemPoints);

module.exports = router;