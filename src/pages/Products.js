// pages/Products.js
import React from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const dairyProducts = [
    { name: 'Buffalo Toned Milk', description: '500ml pouch', image: 'Buffalo-Toned-Milk_500ml.png' },
    { name: 'Double Toned Milk', description: '500ml pouch', image: 'DTM_Milk_500ml-600x600.png' },
    { name: 'Full Cream Milk', description: '500ml pouch', image: 'FCM_Milk_500ml-600x600.png' },
    { name: 'Pure Buffalo Milk', description: '500ml pouch', image: 'Pure-Buffalo-Milk_500ml-600x600.png' },
    { name: 'Standardized Milk', description: '500ml pouch', image: 'STD_Milk_500ml-600x600.png' },
    { name: 'Toned Milk', description: '500 ml pouch', image: 'TM_Milk_500ml-600x599.png' },
    { name: 'Paneer', description: '1 kg pack', image: 'SCM_Paneer-1000g.png' }
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
