import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addToCart, buyNow }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <div className="product-card-buttons">
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <button onClick={() => buyNow(product)}>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
