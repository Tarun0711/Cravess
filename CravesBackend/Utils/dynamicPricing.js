const PricingRule = require('../models/PricingRule');

const applyDynamicPricing = async (dish, customer, location, currentTime, demandLevel) => {
    const activeRules = await PricingRule.find({ isActive: true });

    let finalPrice = dish.basePrice;

    activeRules.forEach(rule => {
        switch (rule.ruleType) {
            case 'time-based':
                if (currentTime >= rule.startTime && currentTime <= rule.endTime) {
                    finalPrice -= (finalPrice * rule.discount) / 100;
                }
                break;
            case 'demand-based':
                if (demandLevel >= rule.conditions.get('minDemand')) {
                    finalPrice += (finalPrice * rule.discount) / 100;
                }
                break;
            case 'customer-segment':
                if (customer && customer.segment === rule.conditions.get('segment')) {
                    finalPrice -= (finalPrice * rule.discount) / 100;
                }
                break;
            case 'location-based':
                if (location === rule.conditions.get('location')) {
                    finalPrice += (finalPrice * rule.discount) / 100;
                }
                break;
            default:
                break;
        }
    });

    return finalPrice;
};

module.exports = applyDynamicPricing;
