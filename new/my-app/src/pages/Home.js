import React, { useContext } from 'react';
import './Home.css';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../components/CartContext';

const Home = () => {
  const products = [
    {
      id: 1,
      name: 'Luxury Watch',
      price: 299.99,
      // image: '/images/luxury-watch.jpg',
    },
    {
      id: 2,
      name: 'Sport Watch',
      price: 199.99,
      // image: '/images/sport-watch.jpg',
    },
    {
      id: 3,
      name: 'Classic Watch',
      price: 149.99,
      // image: '/images/classic-watch.jpg',
    },
  ];

  const { addToCart, buyNow } = useContext(CartContext);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Discover Our Exclusive Collection</h1>
        <p>Shop the finest watches, crafted to perfection.</p>
        <a href="/products" className="button">Shop Now</a>
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
              buyNow={buyNow}
            />
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Exclusive Watches. All rights reserved.</p>
        <p><a href="/terms">Terms & Conditions</a> | <a href="/privacy">Privacy Policy</a></p>
      </footer>
    </div>
  );
};

export default Home;
