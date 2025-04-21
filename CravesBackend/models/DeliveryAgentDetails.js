const mongoose = require("mongoose");

const deliveryAgentDetailsSchema = new mongoose.Schema({
  vehicleDetails: {
    type: {
      vehicleType: String,
      vehicleNumber: String,
      vehicleModel: String,
    },
    // required: true,
  },
  document: {
    type: String,
    // required: true,
  },
  accountDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AccountDetails",
  },
  assignedOrders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  availabilityStatus: {
    type: String,
    enum: ["Available", "Unavailable", "On Delivery"],
    default: "Available",
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      //   required: true,
    },
    coordinates: {
      type: [Number],
      //   required: true,
    },
  },
  ratingAndReview: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RatingAndReview",
    },
  ],
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    // required: true,
    default: "Male",
  },
  aadharNumber: {
    type: Number,
    // required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[0-9]{12}$/.test(v);
      },
      message: "Aadhar number should be 12 digits long.",
    },
  },
  panNumber: {
    type: String,
    // required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(v);
      },
      message: "PAN number should be in the format ABCDE1234A.",
    },
  },
  dateOfBirth:{
    type: Date,
    // required: true,
    // validate: {
    //   validator: function (v) {
    //     return moment(v).isValid();
    //   },
    //   message: "Date of birth should be a valid date.",
    // },
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

module.exports = mongoose.model(
  "DeliveryAgentDetails",
  deliveryAgentDetailsSchema
);
