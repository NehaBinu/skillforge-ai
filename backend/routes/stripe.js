const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const auth = require("../middleware/auth");
const Organization = require("../models/Organization");
const Plan = require("../models/Plan");
const Subscription = require("../models/Subscription");
const User = require("../models/User");

// 1. Create Checkout Session
router.post("/checkout", auth, async (req, res) => {
  try {
    const { orgId, planId } = req.body;
    const org = await Organization.findById(orgId);
    const plan = await Plan.findById(planId);
    const user = await User.findById(req.userId);

    let customerId = org.stripeCustomerId;
    if (!customerId) {
      const customer = await stripe.customers.create({ email: user.email, name: org.name });
      customerId = customer.id;
      org.stripeCustomerId = customerId;
      await org.save();
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: plan.priceId, quantity: 1 }],
      success_url: `${process.env.CLIENT_URL}/dashboard?success=true`,
      cancel_url: `${process.env.CLIENT_URL}/pricing?canceled=true`,
      metadata: { orgId: org._id.toString(), planId: plan._id.toString() },
    });

    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2. Webhook — MUST use raw body, mounted separately in server.js
router.post("/webhook", async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const { orgId, planId } = session.metadata;

    await Subscription.findOneAndUpdate(
      { orgId },
      {
        planId,
        stripeSubscriptionId: session.subscription,
        status: "active",
      },
      { upsert: true }
    );
  }

  if (event.type === "customer.subscription.updated" || event.type === "customer.subscription.deleted") {
    const sub = event.data.object;
    await Subscription.findOneAndUpdate(
      { stripeSubscriptionId: sub.id },
      { status: sub.status }
    );
  }

  res.json({ received: true });
});

module.exports = router;