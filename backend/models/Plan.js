const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  name: { type: String, required: true },        // "Free" | "Pro" | "Team"
  priceId: { type: String },                       // Stripe price ID, null for Free
  price: { type: Number, default: 0 },
  features: [String],
  limits: {
    maxCourses: { type: Number, default: 5 },
    maxSeats: { type: Number, default: 1 },
  },
});

module.exports = mongoose.model("Plan", planSchema);