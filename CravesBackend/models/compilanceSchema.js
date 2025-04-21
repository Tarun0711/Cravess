const mongoose = require("mongoose");

const complianceSchema = new mongoose.Schema({
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RestaurantDetails",
    required: true,
  },
  complianceType: {
    type: String,
    enum: ["Health", "Safety", "Licensing"],
    required: true,
  },
  status: {
    type: String,
    enum: ["Compliant", "Non-Compliant", "Pending"],
    default: "Pending",
  },
  lastChecked: {
    type: Date,
    default: Date.now,
  },
  comments: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Compliance", complianceSchema);
