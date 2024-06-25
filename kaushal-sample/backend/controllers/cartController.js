const Order = require('../models/Order');

exports.getCart = async (req, res) => {
  try {
    const order = await Order.findOne({ user: req.user.id, status: 'Pending' }).populate('products.product');
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    let order = await Order.findOne({ user: req.user.id, status: 'Pending' });

    if (!order) {
      order = new Order({ user: req.user.id, products: [] });
    }

    const productIndex = order.products.findIndex(p => p.product.toString() === productId);
    if (productIndex > -1) {
      order.products[productIndex].quantity += quantity;
    } else {
      order.products.push({ product: productId, quantity });
    }

    order.total = order.products.reduce((acc, item) => acc + item.quantity * item.product.price, 0);
    await order.save();

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.removeFromCart = async (req, res) => {
  const { productId } = req.body;

  try {
    let order = await Order.findOne({ user: req.user.id, status: 'Pending' });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.products = order.products.filter(p => p.product.toString() !== productId);
    order.total = order.products.reduce((acc, item) => acc + item.quantity * item.product.price, 0);
    await order.save();

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
