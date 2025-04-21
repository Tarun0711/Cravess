const mongoose = require('mongoose');

const pricingRuleSchema = new mongoose.Schema({
    ruleName: { 
        type: String, 
        required: true 
    },
    ruleType: {
         type: String,
          enum: ['time-based', 'demand-based', 'customer-segment', 'location-based'], 
          required: true 
        },
    conditions: { 
        type: Map, 
        of: String,
        required: true 
    },
    discount: { type: Number,
         required: true },
    isActive: { type: Boolean,
         default: true 
        },
    startTime: {
         type: Date 
        },
    endTime: { type: Date 

    },
    createdAt: { 
        type: Date, default: Date.now 
    },
    updatedAt: {
         type: Date, default: Date.now
         }
});

module.exports = mongoose.model('PricingRule', pricingRuleSchema);
