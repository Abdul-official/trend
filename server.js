import express from "express";
import Stripe from "stripe";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// ✅ Use your Stripe Secret Key (keep it private)
// const stripe = new Stripe(
//   "sk_test_51RvHRKHzVmYq6Pv1ADwBbRHWZDuofLtS8DihiAJV0BPD55R2048TsYLQIsi8pRUUwNN0p57XPbFiUyG03Hqqcz1P00pKP96ZYG"
// );

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const FRONTEND_ORIGIN = "https://trend-6.onrender.com";

// Middleware
app.use(cors({ origin: FRONTEND_ORIGIN }));
app.use(express.json());

// ✅ Create Checkout Session
app.post("/create-checkout-session", async (req, res) => {
  try {
    const { amount } = req.body; // amount in cents

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"], // You can add more if supported
      mode: "payment",
      locale: "en", // USD format with $ symbol
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Cart Purchase" },
            unit_amount: amount, // amount is already in cents
          },
          quantity: 1,
        },
      ],
       success_url: `${FRONTEND_ORIGIN}/checkoutPage?success=true`,
       cancel_url: `${FRONTEND_ORIGIN}/checkoutPage?canceled=true`,
      // success_url: `${FRONTEND_ORIGIN}/success`,
      // cancel_url: `${FRONTEND_ORIGIN}/cancel`,
    });

    // Send session ID to frontend
    res.json({ id: session.id });
  } catch (err) {
    console.error("Stripe session creation failed:", err);
    res.status(500).json({ error: "Failed to create session" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("✅ Server running on http://localhost:5000");
  console.log("PORT from env:", process.env.PORT);
});




