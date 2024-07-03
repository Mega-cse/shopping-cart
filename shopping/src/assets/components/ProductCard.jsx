// ProductCard.js
import React, { useState } from 'react';
const ProductCard = ({ product, addToCart, removeFromCart }) => {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setInCart(true);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product);
    setInCart(false);
  };

  return (
    <div className="card mb-4">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5>{product.name}</h5>
        <p className="card-text">${product.price}</p>

        {inCart ? (
          <button onClick={handleRemoveFromCart} className="btn btn-danger">
            Remove from Cart
          </button>
        ) : (
          <button onClick={handleAddToCart} className="btn btn-primary">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
