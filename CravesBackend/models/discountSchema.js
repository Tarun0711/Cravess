const mongoose = require("mongoose");

// Define the schema for Discounts
const discountSchema = new mongoose.Schema({
    discountType: {
      type: String,
      enum: ["Percentage", "Flat"],  
      // required: true,
    },
    discountValue: {
      type: Number,
      // required: true,
    },
    validUntil: {
      type: Date,
      // required: true, 
    },
  });

module.exports = discountSchema
