const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RewardSchema = new Schema({
    rewardName: {
        type: String,
        // required: true
    },
    pointsRequired: {
        type: Number,
        // required: true
    },
    description: {
        type: String,
        // required: true
    },
    expiryDate: {
        type: Date
    },
    isActive: {
        type: Boolean,
        default: false
    }
});

const Reward = mongoose.model('Reward', RewardSchema);

module.exports =  Reward ;
