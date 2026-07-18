require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth");
const orgRoutes = require("./routes/org");
const stripeRoutes = require("./routes/stripe");

const app = express();

// Webhook route needs raw body — must be registered BEFORE express.json()
app.use("/api/stripe/webhook", express.raw({ type: "application/json" }));
app.post("/api/stripe/webhook", require("./routes/stripe"));

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/org", orgRoutes);
app.use("/api/stripe", stripeRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));