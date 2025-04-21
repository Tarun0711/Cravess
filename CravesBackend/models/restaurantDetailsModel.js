const mongoose = require('mongoose');
const discountSchema = require("./discountSchema")
const restaurantDetailsSchema = new mongoose.Schema({
    restaurantDetails: {
        type: {
            restaurantName: {
                type: String,
                // required: true,
            },
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
    availabilityStatus: {
        type: String,
        enum: ["Available", "Unavailable"],
        default: "Available",
    },
    location: {
        type: {
            type: String,
            enum: ["Point"],
            // required: true,
        },
        coordinates: {
            type: [Number],
            // required: true,
        },
    },
    img: {
        type: String,
        // required: true,
    },
    openingTime: {
        type: String,
        // required: true,
    },
    closingTime: {
        type: String,
        // required: true,
    },
    discounts: [discountSchema],
    dishTypes: {
        type: [String],
        enum: ["Appetizer", "Main Course", "Dessert", "Beverage"],
        // required: true,
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
restaurantDetailsSchema.index({
    name: "text",
    description: "text",
    tags: "text",
  });
module.exports = mongoose.model('RestaurantDetails', restaurantDetailsSchema);
