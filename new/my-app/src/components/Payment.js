// src/components/Payment.js
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, CardElement } from '@stripe/react-stripe-js'; // Removed useElements

// Load the stripe object (replace with your Stripe public key)
const stripePromise = loadStripe('YOUR_PUBLIC_KEY'); 

const CheckoutForm = ({ totalAmount, cartItems }) => {
  const stripe = useStripe();
  // Removed the useElements() hook since it's not being used

  const handleCheckout = async () => {
    const response = await fetch('http://localhost:5000/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cartItems }),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div>
      <h2>Total: ${totalAmount}</h2>
      <CardElement />
      <button onClick={handleCheckout}>Pay Now</button>
    </div>
  );
};

const Payment = ({ totalAmount, cartItems }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm totalAmount={totalAmount} cartItems={cartItems} />
    </Elements>
  );
};

export default Payment;
