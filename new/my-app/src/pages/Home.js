import React from 'react';
import './Home.css';
import ProductCard from '../components/ProductCard';
import { useCart } from '../components/CartContext'; // Use useCart instead of CartContext
import Luxurywatch from '../assets/watch.jpg';
import sportwatch from '../assets/apple watch.jpg';
import mainphoto from '../assets/images.jpg';

const Home = () => {
  const products = [
    {
      id: 1,
      name: 'Luxury Watch',
      price: 299.99,
      image: Luxurywatch,
    },
    {
      id: 2,
      name: 'Sport Watch',
      price: 199.99,
      image: sportwatch,
    },
    {
      id: 3,
      name: 'Classic Watch',
      price: 149.99,
      image: Luxurywatch,
    },
  ];

  const { addToCart } = useCart(); // Use useCart hook

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Our Exclusive Collection</h1>
          <p>Shop the finest watches, crafted to perfection.</p>
          <a href="/products" className="button">Shop Now</a>
        </div>
        <img src={mainphoto} alt="Exclusive Collection" className="hero-image" />
      </section>

      {/* Product Listing Section */}
      <section className="product-list">
        <h2>Our Products</h2>
        <div className="product-list-items">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              buyNow={() => alert(`Buying ${product.name}`)} // Simple Buy Now logic for demonstration
            />
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Exclusive Watches. All rights reserved.</p>
        <p>
          <a href="/terms">Terms & Conditions</a> | <a href="/privacy">Privacy Policy</a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
