const mongoose = require("mongoose");

// Define the schema for an order item
const orderItemSchema = new mongoose.Schema({
  dishName: String,
  quantity: Number,
  price: Number,
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RestaurantDetails",
  },
  offer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Offer", // Reference to the applied offer
  },
  finalItemPrice: Number, // Price after applying the offer
});
// Define the schema for customer information
const customerInfoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  address: String,
  phone: String,
});
// Define the schema for delivery details
const deliveryDetailsSchema = new mongoose.Schema({
  deliveryAgent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DeliveryAgentDetails",
  },
  deliveryAddress: String,
  deliveryTime: Date,
  deliveryStatus: {
    type: String,
    enum: ["Pending", "Out for Delivery", "Delivered", "Cancelled"],
    default: "Pending",
  },
});
// Define the schema for applied coupon
const appliedCouponSchema = new mongoose.Schema({
  code: String,
  discountAmount: Number,
});

// Define the schema for an order
const orderSchema = new mongoose.Schema({
  customer: customerInfoSchema,
  items: [orderItemSchema],
  totalPrice: Number,
  discountedPrice: Number,
  coupon: appliedCouponSchema,
  paymentStatus: {
    type: String,
    enum: ["Pending", "Completed", "Failed"],
    default: "Pending",
  },
  deliveryDetails: deliveryDetailsSchema,
  orderStatus: {
    type: String,
    enum: ["Placed", "Processing", "Completed", "Cancelled"],
    default: "Placed",
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

// Export the Order model
module.exports = mongoose.model("Order", orderSchema);
