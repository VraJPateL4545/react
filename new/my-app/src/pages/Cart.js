import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../components/CartContext';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
