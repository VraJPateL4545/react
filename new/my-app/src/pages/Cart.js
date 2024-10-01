// src/pages/Cart.js
import React from 'react';
import { useCart } from '../components/CartContext'; // Import useCart

const Cart = () => {
    const { cartItems } = useCart(); // Access cart items

    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

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
                        </div>
                    ))}
                    <h2>Total Amount: ${totalAmount}</h2>
                    <button>Checkout</button> {/* Implement your checkout logic here */}
                </div>
            )}
        </div>
    );
};

export default Cart;
