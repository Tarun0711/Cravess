const Order = require("../models/orderSchema");
const User = require("../models/userModel");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const { awardPoints, redeemPoints } = require("./LoyaltyReward");
const Offer = require("../models/OfferSchema")
const Coupon = require("../models/CouponSchema")
const getUserPoints = async (userId) => {
  try {
    const user = await User.findOne({ _id: userId });
    if (!user) {
      throw new Error("User not found");
    }
    return user.points;
  } catch (err) {
    throw new Error(`Error fetching user points: ${err.message}`);
  }
};

exports.placeOrder = async (req, res) => {
  const {
    customer,
    items,
    paymentStatus,
    deliveryDetails,
    orderStatus,
    couponCode,
    redeemedPoints,
  } = req.body;

  try {
    let totalPrice = 0;
    let discountAmount = 0;
    let finalPrice = 0;
    let appliedCoupon = null;

    // Process each item and apply offer
    const processedItems = await Promise.all(
      items.map(async (item) => {
        let finalItemPrice = item.price;
        if (item.offer) {
          const offer = await Offer.findById(item.offer);
          if (offer) {
            const itemDiscount = (item.price * offer.discountPercentage) / 100;
            finalItemPrice -= itemDiscount;
          }
        }
        totalPrice += finalItemPrice * item.quantity;
        return {
          ...item,
          finalItemPrice,
        };
      })
    );

    finalPrice = totalPrice;

    // Validate and apply the coupon
    if (couponCode) {
      const coupon = await Coupon.findOne({ code: couponCode, isActive: true });
      if (coupon) {
        const currentDate = new Date();
        if (
          currentDate >= coupon.validFrom &&
          currentDate <= coupon.validUntil
        ) {
          discountAmount = (totalPrice * coupon.discountPercentage) / 100;
          finalPrice = Math.max(finalPrice - discountAmount, 0);
          appliedCoupon = { code: coupon.code, discountAmount };
        } else {
          return res
            .status(400)
            .json({ error: "Coupon is not valid or has expired." });
        }
      } else {
        return res.status(400).json({ error: "Invalid coupon code." });
      }
    }

    // Apply loyalty points if redeemed
    if (redeemedPoints && redeemedPoints > 0) {
      const userPoints = await getUserPoints(
        new mongoose.Types.ObjectId(customer.user)
      );
      if (userPoints >= redeemedPoints) {
        finalPrice = Math.max(finalPrice - redeemedPoints, 0);
        await redeemPoints(
          new mongoose.Types.ObjectId(customer.user),
          redeemedPoints
        );
      } else {
        return res
          .status(400)
          .json({ error: "Insufficient points for redemption." });
      }
    }

    const newOrder = new Order({
      customer,
      items: processedItems,
      totalPrice,
      discountedPrice: finalPrice,
      coupon: appliedCoupon,
      paymentStatus,
      deliveryDetails,
      orderStatus,
    });

    await newOrder.save();

    if (customer && customer.user) {
      const result = await awardPoints(
        new mongoose.Types.ObjectId(customer.user),
        finalPrice
      );
      res.status(201).json({
        message:
          "Order placed successfully, discounts applied, and points awarded.",
        order: newOrder,
        points: result.points,
      });
    } else {
      res.status(201).json({
        message: "Order placed successfully and discounts applied.",
        order: newOrder,
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.trackOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId)
      .populate("customer.user")
      .populate("items.restaurant");

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    console.error("Error tracking order:", error);
    res.status(400).json({ error: error.message });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // console.log(order);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.cancelOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    // console.log(orderId);

    const order = await Order.findByIdAndDelete(orderId);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
