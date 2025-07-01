// pages/Products.js
import React from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const dairyProducts = [
    { name: 'Toned Milk', description: '500ml pouch', image: '/milk.png' },
    { name: 'Fresh Paneer', description: '200g pack', image: '/paneer.png' },
    { name: 'asd', description: '200g pack', image: '/paneer.png' }
  ];

  return (
    <div className="products-grid">
      {dairyProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default Products;
