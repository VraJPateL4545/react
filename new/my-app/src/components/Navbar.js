import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import './Navbar.css'; // Import your custom CSS for styling

const Navbar = () => {
  const { cartItems } = useCart(); // Access cart items using useCart

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">WatchStore</Link> {/* Brand logo */}
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" aria-label="Home">Home</Link>
        </li>
        <li>
          <Link to="/products" aria-label="Products">Products</Link>
        </li>
        <li>
          <Link to="/cart" aria-label="Cart">
            Cart 
            <span className="cart-count">({cartItems.length})</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
