const stripeLib = require("stripe");

const createPayment = async (req, res) => {
    try {
        const stripe = stripeLib(process.env.STRIPE_SECRET_KEY);
        const { name, price } = req.body;

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: [{
                price_data: {
                    currency: "inr",
                    product_data: { name },
                    unit_amount: price * 100,
                },
                quantity: 1,
            }],
            success_url: `${process.env.FRONTEND_URL}/success`,
            cancel_url: `${process.env.FRONTEND_URL}/cancel`,
        });

        res.json({ url: session.url });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
            data: null
        });
    }
};

module.exports = { createPayment };