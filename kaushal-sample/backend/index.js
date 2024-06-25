const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const Order = require('./models/Order');
const Product = require('./models/Product');
const User = require('./models/User');
const connectDB = require('./config/db');


const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const order = new Order({
  title: 'Your Order!',
  slug: 'your-order',
  published: true,
  content: 'Order-Confirmed',
  tags: ['featured', 'announcement'],
});

order.save().then(() => {
  console.log('Order saved!');
}).catch(err => {
  console.error('Error saving Order:', err);
});

// Create and save a product
const product = new Product({
  title: 'Product!',
  slug: 'your-product',
  published: true,
  content: 'Select Product ',
  tags: ['featured', 'announcement'],
});

product.save().then(() => {
  console.log('Product saved into wishlist!');
}).catch(err => {
  console.error('Error saving product:', err);
});

// Create and save a user
const user = new User({
  title: 'Authentication Required!',
  slug: 'your-profile',
  published: true,
  content: 'profile created!',
  tags: ['featured', 'announcement'],
});

user.save().then(() => {
  console.log('Information saved!');
}).catch(err => {
  console.error('Error saving user:', err);
});

// Find the first user
async function findFirstUser() {
  try {
    const firstUser = await User.findOne({});
    console.log(firstUser);
  } catch (error) {
    console.error('Error finding the User:', error);
  }
}

findFirstUser();


