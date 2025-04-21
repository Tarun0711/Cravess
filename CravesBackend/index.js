const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
const cors = require("cors");
const userAuth = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");
const manageOrders = require("./routes/orderRoutes");
const LoyaltyAndRewards = require("./routes/LoyaltyRewars")
const OffersAndCoupons = require("./routes/OffersAndCoupons")
const Review = require("./routes/compilanceReview")
const profileRoutes=require("./routes/profileRoutes")
const ratingAndReview =require('./routes/ratingAndReviewsRoutes')
const support =require('./routes/supportRoute')
const discountRoutes=require("./routes/dynamicPricingAndDiscountRoutes")
const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("DB Connected Successfully 🔥"))
    .catch((error) => {
      console.log("DB Connection Failed");
      console.error(error);
      process.exit(1);
    });
};

connect();

app.use(express.json());
const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: "*",
    credentials: true,
    maxAge: 14400,
  })
);

app.use("/api/v1/auth", userAuth);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/restaurant", restaurantRoutes);
app.use("/api/v1/manage-order", manageOrders);
app.use("/api/v1/loyalty-and-rewards",LoyaltyAndRewards)
app.use("/api/v1/offers-and-coupons",OffersAndCoupons)
app.use("/api/v1/review",Review)

app.use('/api/v1/profile',profileRoutes);
app.use('/api/v1/RatingAndReview',ratingAndReview)
app.use('/api/v1/support',support)
app.use('/api/v1/discounts',discountRoutes)

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Craves Backend🧑🏼‍🍳",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🤝`);
});

module.exports = app;