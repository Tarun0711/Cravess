const Compliance = require("../models/compilanceSchema");
const Review = require("../models/reviewSchema");

exports.checkCompliance = async (req, res) => {
  const { restaurantId, complianceType, status, comments } = req.body;

  try {
    let compliance = await Compliance.findOne({ restaurantId, complianceType });

    if (compliance) {
      compliance.status = status;
      compliance.comments = comments;
      compliance.lastChecked = Date.now();
      compliance.updatedAt = Date.now();
    } else {
      compliance = new Compliance({
        restaurantId,
        complianceType,
        status,
        comments,
      });
    }

    await compliance.save();

    res
      .status(200)
      .json({ message: "Compliance status updated successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addReview = async (req, res) => {
  const { restaurantId, userId, rating, comment } = req.body;

  try {
    const newReview = new Review({
      restaurantId,
      userId,
      rating,
      comment,
    });

    await newReview.save();

    res
      .status(201)
      .json({ message: "Review added successfully.", review: newReview });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.updateReview = async (req, res) => {
  const { reviewId, rating, comment } = req.body;

  try {
    const review = await Review.findById(reviewId);

    if (!review) {
      return res.status(404).json({ message: "Review not found." });
    }

    review.rating = rating || review.rating;
    review.comment = comment || review.comment;
    review.updatedAt = Date.now();

    await review.save();

    res.status(200).json({ message: "Review updated successfully.", review });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.deleteReview = async (req, res) => {
  const { reviewId } = req.params;

  try {
    await Review.findByIdAndDelete(reviewId);

    res.status(200).json({ message: "Review deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
