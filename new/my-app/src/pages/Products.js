import React from 'react';
import './Products.css';
import Luxurywatch from '../assets/watch.jpg';
import sportwatch from '../assets/apple watch.jpg';
import { useCart } from '../components/CartContext'; // Ensure this import is correct

const products = [
  {
    id: 1,
    name: 'Luxury Watch',
    description: 'A luxurious watch with exquisite design and craftsmanship.',
    price: 299.99,
    image: Luxurywatch,
  },
  {
    id: 2,
    name: 'Sport Watch',
    description: 'A durable sports watch designed for active lifestyles.',
    price: 149.99,
    image: sportwatch,
  },
  {
    id: 3,
    name: 'Classic Watch',
    description: 'A classic watch that never goes out of style.',
    price: 199.99,
    image: Luxurywatch, // You can replace with actual image path
  },
];

const Products = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} has been added to your cart!`); // Optional feedback
  };

  return (
    <div className="products-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} className="product-image" />
          <h2>{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <button onClick={() => handleAddToCart(product)} className="add-to-cart-button">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
