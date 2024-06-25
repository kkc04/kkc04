// components/AddProductForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products', productData);
      // Handle success (e.g., show a success message to the user)
    } catch (error) {
      // Handle error (e.g., display an error message to the user)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={productData.name} onChange={handleChange} />
      <input type="text" name="description" value={productData.description} onChange={handleChange} />
      <input type="text" name="price" value={productData.price} onChange={handleChange} />
      <input type="text" name="imageUrl" value={productData.imageUrl} onChange={handleChange} />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
