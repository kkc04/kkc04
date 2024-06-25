// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.post('/', async (req, res) => {
  try {
    const { name, description, price, imageUrl } = req.body;
    const newProduct = new Product({ name, description, price, imageUrl });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
