const express = require('express');
const router = express.Router();

// Import the necessary controllers
const {
    placeOrder,
    updateOrder,
    cancelOrder,
    trackOrder
} = require("../controllers/orderControllers")

// Route to place an order
router.post('/placeOrder', placeOrder)

// Route to track an order
router.get("/trackOrder/:id", trackOrder)

// Route to update an order
router.put('/updateOrder/:id', updateOrder)

// Route to cancel an order
router.delete('/cancelOrder/:id', cancelOrder)

module.exports = router;