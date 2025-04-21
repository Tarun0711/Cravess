const express = require("express")
const router = express.Router()

const {
    createOffer,
    addOfferToDish,
    removeOfferFromDish,
    createCoupon,
    updateCoupon,
    deleteCoupon
} = require("../controllers/offersAndCoupons")

// Route to create a new offer
router.post("/createOffer",createOffer)

// Route to replace offers
router.put('/offers/:offerId/restaurants/:restaurantId/dishes/:dishId', addOfferToDish);

// Route to delete the offers
router.delete('/offers/:offerId/restaurants/:restaurantId/dishes/:dishId', removeOfferFromDish);

// Route to create a new coupon
router.post("/createCoupon", createCoupon)

// Route to update a coupon
router.put("/updateCoupon/:id", updateCoupon)

// Route to delete a coupon
router.delete("/deleteCoupon/:id", deleteCoupon)

module.exports = router