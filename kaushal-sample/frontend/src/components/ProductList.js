import React, { useState, useEffect } from 'react';
import { getProducts, addToCart } from '../services/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      await addToCart(productId, 1);
      alert('Product added to cart');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="product-list">
      <h2>Products</h2>
      {error && <p className="error">{error}</p>}
      <div className="products">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => handleAddToCart(product._id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
