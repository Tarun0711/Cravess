const Restaurant = require('../models/restaurantDetailsSchema');
const DeliveryAgent = require('../models/DeliveryAgentDetails');
const Review = require('../models/RatingAndReviewsModel');

exports.createReview = async (req, res) => {
    const { restaurantId, deliveryAgentId, userId, rating, reviewText } = req.body;

    try {
        // Ensure one of the IDs is provided
        if (!restaurantId && !deliveryAgentId) {
            return res.status(400).json({ error: 'Either restaurantId or deliveryAgentId must be provided' });
        }

        // Create the review
        const newReview = new Review({
            userId,
            rating,
            reviewText,
        });

        await newReview.save();

        // Determine where to push the reviewId
        if (restaurantId) {
            await Restaurant.findByIdAndUpdate(
                restaurantId,
                { $push: {ratingAndReview : newReview._id } },
                { new: true }
            );
        } else if (deliveryAgentId) {
            await DeliveryAgent.findByIdAndUpdate(
                deliveryAgentId,
                { $push: { ratingAndReview: newReview._id } },
                { new: true }
            );
        }

        res.status(201).json({ message: 'Review created and added successfully', review: newReview });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while processing the request', details: error.message });
    }
};

