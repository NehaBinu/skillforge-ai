require("dotenv").config();
const mongoose = require("mongoose");
const Plan = require("./models/Plan");

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);

  await Plan.deleteMany({});
  await Plan.create([
    { name: "Free", priceId: null, price: 0, features: ["3 courses", "Basic AI tutor"], limits: { maxCourses: 3, maxSeats: 1 } },
    { name: "Pro", priceId: "price_xxxxx", price: 12, features: ["Unlimited courses", "Full AI tutor", "Certificates"], limits: { maxCourses: 999, maxSeats: 1 } },
    { name: "Team", priceId: "price_yyyyy", price: 10, features: ["Everything in Pro", "Team dashboard", "Shared library"], limits: { maxCourses: 999, maxSeats: 10 } },
  ]);

  console.log("Plans seeded");
  process.exit();
}

seed();