import React from 'react';
import ProductList from '../components/ProductList';

const products = [
  { id: 1, name: 'Product 1', price: 29.99   },
  { id: 2, name: 'Product 2', price: 19.99   },
  // Add more products here
];

const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Shop;
