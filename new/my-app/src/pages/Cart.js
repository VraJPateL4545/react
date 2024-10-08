import React from 'react';
import { useCart } from '../components/CartContext'; 
import Payment from '../components/Payment'; // Import the payment component

const Cart = () => {
  const { cartItems } = useCart();

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <h2>{item.name}</h2>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
          <h2>Total Amount: ${totalAmount}</h2>

          {/* Render the payment component */}
          <Payment totalAmount={totalAmount} cartItems={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Cart;
