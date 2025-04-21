const Offer = require("../models/OfferSchema");
const Dish = require("../models/dishSchema");
const Restaurant = require("../models/restaurantDetailsModel");
const Coupon = require('../models/CouponSchema');

exports.createOffer = async (req, res) => {
  try {
    const {
      title,
      description,
      discountPercentage,
      validFrom,
      validUntil,
      termsAndConditions,
      restaurantId,
      dishIds,
    } = req.body;

    // Check if the restaurant exists
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    // Check if all the dish IDs exist and belong to the specified restaurant
    const dishes = await Dish.find({
      _id: { $in: dishIds },
      restaurant: restaurantId,
    });
    if (dishes.length !== dishIds.length) {
      return res.status(404).json({
        message:
          "One or more dishes not found or do not belong to the restaurant",
      });
    }

    const offer = new Offer({
      title,
      description,
      discountPercentage,
      validFrom,
      validUntil,
      termsAndConditions,
      restaurant: restaurantId,
      dishes: dishIds,
    });

    await offer.save();
    res.status(201).json(offer);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating offer", error: error.message });
  }
};
exports.addOfferToDish = async (req, res) => {
  try {
    const { offerId, restaurantId, dishId } = req.params;

    // Find the offer by ID
    const offer = await Offer.findById(offerId);
    if (!offer) {
      return res.status(404).json({ message: "Offer not found" });
    }

    // Check if the dish exists and belongs to the specified restaurant
    const dish = await Dish.findOne({ _id: dishId, restaurant: restaurantId });
    if (!dish) {
      return res.status(404).json({
        message: "Dish not found or does not belong to the restaurant",
      });
    }

    // Add the dish to the offer if it's not already included
    if (!offer.dishes.includes(dishId)) {
      offer.dishes.push(dishId);
      await offer.save();
    }

    res.status(200).json(offer);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding offer to dish", error: error.message });
  }
};

exports.removeOfferFromDish = async (req, res) => {
  try {
    const { offerId, restaurantId, dishId } = req.params;

    // Find the offer by ID
    const offer = await Offer.findById(offerId);
    if (!offer) {
      return res.status(404).json({ message: "Offer not found" });
    }

    // Check if the dish exists in the offer's dishes list and belongs to the specified restaurant
    const dish = await Dish.findOne({ _id: dishId, restaurant: restaurantId });
    if (!dish || !offer.dishes.includes(dishId)) {
      return res
        .status(404)
        .json({
          message:
            "Dish not found in offer or does not belong to the restaurant",
        });
    }

    offer.dishes.pull(dishId);
    await offer.save();

    res.status(200).json(offer);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error removing offer from dish",
        error: error.message,
      });
  }
};


exports.createCoupon = async (req, res) => {
  try {
    const { code, description, discountPercentage, validFrom, validUntil, termsAndConditions } = req.body;

    const coupon = new Coupon({
      code,
      description,
      discountPercentage,
      validFrom,
      validUntil,
      termsAndConditions,
    });

    await coupon.save();
    res.status(201).json(coupon);
  } catch (error) {
    res.status(500).json({ message: 'Error creating coupon', error: error.message });
  }
};

exports.getAllCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.status(200).json(coupons);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving coupons', error: error.message });
  }
};

exports.getCouponById = async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id);
    if (!coupon) {
      return res.status(404).json({ message: 'Coupon not found' });
    }
    res.status(200).json(coupon);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving coupon', error: error.message });
  }
};

exports.updateCoupon = async (req, res) => {
  try {
    const { code, description, discountPercentage, validFrom, validUntil, termsAndConditions, isActive } = req.body;
    const coupon = await Coupon.findById(req.params.id);
    if (!coupon) {
      return res.status(404).json({ message: 'Coupon not found' });
    }

    coupon.code = code || coupon.code;
    coupon.description = description || coupon.description;
    coupon.discountPercentage = discountPercentage || coupon.discountPercentage;
    coupon.validFrom = validFrom || coupon.validFrom;
    coupon.validUntil = validUntil || coupon.validUntil;
    coupon.termsAndConditions = termsAndConditions || coupon.termsAndConditions;
    coupon.isActive = isActive !== undefined ? isActive : coupon.isActive;
    coupon.updatedAt = Date.now();
    await coupon.save();
    res.status(200).json(coupon);
  } catch (error) {
    res.status(500).json({ message: 'Error updating coupon', error: error.message });
  }
};

exports.deleteCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndDelete(req.params.id);
    if (!coupon) {
      return res.status(404).json({ message: 'Coupon not found' });
    }
    res.status(200).json({ message: 'Coupon deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting coupon', error: error.message });
  }
};
