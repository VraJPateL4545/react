import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addToCart, buyNow }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div className="product-card-buttons">
          <button className="btn-add" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          <button className="btn-buy" onClick={() => buyNow(product)}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
