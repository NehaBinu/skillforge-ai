const mongoose = require("mongoose");

const subSchema = new mongoose.Schema({
  orgId: { type: mongoose.Schema.Types.ObjectId, ref: "Organization", required: true, unique: true },
  stripeSubscriptionId: { type: String },
  planId: { type: mongoose.Schema.Types.ObjectId, ref: "Plan", required: true },
  status: { type: String, enum: ["active", "canceled", "past_due", "trialing"], default: "active" },
  currentPeriodEnd: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model("Subscription", subSchema);