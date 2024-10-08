// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
Import ErrorBoundary
// import Cart from './pages/Cart';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Navbar />
          {/* Wrap routes with ErrorBoundary */}
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/success" component={Success} />
              <Route path="/cancel" component={Cancel} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </ErrorBoundary>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
