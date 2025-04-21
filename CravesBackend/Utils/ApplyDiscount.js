const Discount = require('../models/Discount');

const applyDiscountToOrder = async (order, discountCode) => {
    const discount = await Discount.findOne({ discountName: discountCode, isActive: true });

    if (discount) {
        if (discount.discountType === 'percentage') {
            order.totalPrice -= (order.totalPrice * discount.discountValue) / 100;
        } else if (discount.discountType === 'flat') {
            order.totalPrice -= discount.discountValue;
        }
        order.discountApplied = discountCode;
    }

    return order;
};

module.exports = applyDiscountToOrder;
