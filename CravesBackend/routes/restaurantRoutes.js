// Import necessary modules
const express = require("express");
const router = express.Router();

// Import the restaurant controllers
const {
  addRestaurantDetails,
  updateRestaurantProfile,
  getRestaurantDetailsById,
  changeAvailabilityStatus,
  addDish,
  getDishesByRestaurant
} = require("../controllers/restaurantController");

// Route to get a restaurant
router.get("/GetRestaurant/:id", getRestaurantDetailsById);

// Route to create a new restaurant
router.post("/AddRestaurant", addRestaurantDetails);

// Route to dish of a restaurant
router.post("/addDish", addDish);

// Route to get dishes of a restaurant
router.get("/getDish/:restaurantId", getDishesByRestaurant);

// Route to update a restaurant by ID
router.put("/UpdateRestaurant/:id", updateRestaurantProfile);

// Route to update restaurant Time by Id
router.put("/availability/:id", changeAvailabilityStatus);

module.exports = router;