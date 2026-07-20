# SkillForge AI

**Learn smarter. Grow faster.**

A multi-tenant SaaS subscription platform for AI-powered personalized learning — built as Project 4 of the CodTech IT Solutions internship (Intern ID: **CITS3722**).

SkillForge AI lets organizations and individual learners sign up, form teams (orgs), and subscribe to tiered plans with real Stripe billing. It combines personalized AI learning paths, progress tracking, and certification with genuine multi-tenant SaaS architecture — the same pattern used by real B2B products, not a simplified demo.

---

## Features

- **Multi-tenant organizations** — users can belong to multiple orgs; billing and subscriptions live on the organization, not the individual user
- **Role-based membership** — owner / admin / member roles per organization
- **Real Stripe integration** — live (test-mode) Checkout sessions, webhook-driven subscription sync, not mocked billing
- **JWT authentication** — secure, HTTP-only cookie-based sessions
- **Tiered pricing plans** — Free, Pro, and Team, each with distinct feature limits
- **Protected dashboard** — auth-gated routes with automatic redirect for unauthenticated users
- **AI-powered learning platform UI** — personalized learning paths, progress tracking, streaks, and certificates

---

## Tech Stack

**Frontend**
- Next.js 16 (App Router, TypeScript)
- Tailwind CSS
- Framer Motion

**Backend**
- Node.js + Express
- MongoDB Atlas + Mongoose
- Stripe (Checkout + Webhooks)
- JWT for authentication

---

## Architecture

The core multi-tenancy model:

```
User          → { name, email, password }
Organization  → { name, slug, ownerId, stripeCustomerId }
Membership    → { userId, orgId, role: 'owner' | 'admin' | 'member' }
Plan          → { name, priceId, features, limits }
Subscription  → { orgId, stripeSubscriptionId, planId, status }
```

A `User` can belong to multiple `Organization`s via `Membership`. The `Subscription` is attached to the `Organization`, not the user — this is what makes billing genuinely multi-tenant rather than per-account.

**Payment flow:**
1. Org owner selects a plan on the Pricing page
2. Backend creates a Stripe Checkout Session and returns the hosted payment URL
3. User completes payment on Stripe's hosted page
4. Stripe sends a `checkout.session.completed` webhook to the backend
5. Backend updates the `Subscription` record in MongoDB, and the app gates features by `Subscription.status`

---

## Getting Started

### Prerequisites
- Node.js
- A MongoDB Atlas cluster
- A Stripe account (test mode)

### Backend setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
CLIENT_URL=http://localhost:3000
PORT=5000
```

Seed the subscription plans:
```bash
node seed.js
```

Start the server:
```bash
node server.js
```

### Frontend setup

```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:3000`.

### Testing the Stripe webhook locally

```bash
stripe listen --forward-to localhost:5000/api/stripe/webhook
```

Use Stripe's test card `4242 4242 4242 4242` (any future expiry, any CVC) to complete a test payment.

---

## Project Structure

```
skillforge-ai/
├── backend/
│   ├── models/          # User, Organization, Membership, Plan, Subscription
│   ├── routes/          # auth, org, stripe
│   ├── middleware/       # JWT auth middleware
│   ├── seed.js           # seeds Free/Pro/Team plans
│   └── server.js
├── frontend/
│   ├── app/               # Next.js App Router pages
│   ├── components/        # landing, dashboard, shared UI
│   └── lib/                # API client helper
└── README.md
```

---

## About

Built by Neha Binu as part of the CodTech IT Solutions internship (Intern ID: **CITS3722**).
