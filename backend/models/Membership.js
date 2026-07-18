const mongoose = require("mongoose");

const membershipSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  orgId: { type: mongoose.Schema.Types.ObjectId, ref: "Organization", required: true },
  role: { type: String, enum: ["owner", "admin", "member"], default: "member" },
}, { timestamps: true });

module.exports = mongoose.model("Membership", membershipSchema);