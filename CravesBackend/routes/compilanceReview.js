const express = require('express');
const router = express.Router();

const {
    addReview,
    updateReview,
    deleteReview
} = require("../controllers/reviewCompilance")

// Route to add a review
router.post("/addReview", addReview);

// Route to update a review
router.put("/updateReview/:id", updateReview);

// Route to delete a review
router.delete("/deleteReview/:id", deleteReview);

module.exports = router;
