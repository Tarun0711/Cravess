const express = require("express");
const { createReview } = require("../controllers/RatingAndReviewController");
const router = express.Router()


router.post('/addRating',createReview)



module.exports=router;