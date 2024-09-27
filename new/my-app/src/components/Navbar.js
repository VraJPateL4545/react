import React, { useState, useContext } from 'react';
import './Navbar.css';
import { CartContext } from '../components/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="logo">E-Commerce</div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/cart">Cart ({cartItems.length})</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup" className="signup-btn">Sign Up</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
