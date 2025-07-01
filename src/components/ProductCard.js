// components/ProductCard.js
import React from 'react';

const ProductCard = ({ name, description, image }) => (
  <div className="product-card">
    <img src={image} alt={name} />
    <h4>{name}</h4>
    <p>{description}</p>
  </div>
);

export default ProductCard;
