const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoyaltyPointSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: true
    },
    points: {
        type: Number,
        // required: true,
        default: 0
    },
    history: [
        {
            orderId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Order',
                // required: true
            },
            pointsEarned: {
                type: Number,
                // required: true
            },
            pointsRedeemed: {
                type: Number,
                default: 0
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ]
});
const LoyaltyPoint = mongoose.model('LoyaltyPoint', LoyaltyPointSchema)
module.exports = {
    LoyaltyPoint
};
