const path = require('path');
const express = require('express');
const stripe = require('stripe')('sk_test_51Q0PnkARlaNvx5U8y7SyUwQSCjSDr92eRT6Bibeyo234Bz7SQSsmjlH3wCGXbXOk6YAKRWXHLcNWEafuPo5lf1LO00qcQgcmAo'); 
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Payment route
app.post('/create-checkout-session', async (req, res) => {
  const { items } = req.body;
  const lineItems = items.map(item => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// If no other routes match, send back React's index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
