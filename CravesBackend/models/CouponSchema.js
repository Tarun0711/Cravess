const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    // required: true,
    unique: true,
  },
  discountAmount: {
    type: Number,
    // required: true,
  },
  minOrderValue: {
    type: Number,
    // required: true,
  },
  validFrom: {
    type: Date,
    // required: true,
  },
  validUntil: {
    type: Date,
    // required: true,
  },
  isRedeemed: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

const Coupon = mongoose.model('Coupon', couponSchema);
module.exports = Coupon;
