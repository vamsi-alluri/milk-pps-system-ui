// components/ProductCard.js
import React from 'react';
import { getProductImage } from '../utils/ImageLoader';

const ProductCard = ({ name, description, image }) => {
  const imageSrc = getProductImage(image);

  return (
    <div className="product-card">
      <img src={imageSrc} alt={name} className='product-card-img' />
      <div className='product-card-info'>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
