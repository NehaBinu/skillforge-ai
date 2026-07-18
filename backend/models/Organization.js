const mongoose = require("mongoose");

const orgSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  stripeCustomerId: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Organization", orgSchema);