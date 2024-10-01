// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext'; // Import the custom hook

const Navbar = () => {
  const { cartItems } = useCart(); // Access cart items using useCart

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart ({cartItems.length})</Link>
    </nav>
  );
};

export default Navbar;
