const router = require("express").Router();
const auth = require("../middleware/auth");
const Organization = require("../models/Organization");
const Membership = require("../models/Membership");
const Plan = require("../models/Plan");
const Subscription = require("../models/Subscription");

router.post("/", auth, async (req, res) => {
  const { name } = req.body;
  const slug = name.toLowerCase().replace(/\s+/g, "-") + "-" + Date.now().toString(36);

  const org = await Organization.create({ name, slug, ownerId: req.userId });
  await Membership.create({ userId: req.userId, orgId: org._id, role: "owner" });

  const freePlan = await Plan.findOne({ name: "Free" });
  await Subscription.create({ orgId: org._id, planId: freePlan._id, status: "active" });

  res.json(org);
});

router.get("/mine", auth, async (req, res) => {
  const memberships = await Membership.find({ userId: req.userId }).populate("orgId");
  res.json(memberships);
});

module.exports = router;