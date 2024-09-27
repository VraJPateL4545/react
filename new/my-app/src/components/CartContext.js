import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    alert(`${product.name} added to cart!`);
  };

  const buyNow = (product) => {
    // For simplicity, we'll add the product to the cart and navigate to the cart page
    setCartItems([...cartItems, product]);
    window.location.href = '/cart';
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, buyNow }}>
      {children}
    </CartContext.Provider>
  );
};
