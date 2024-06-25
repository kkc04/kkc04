const express = require('express');
const { getCart, addToCart, removeFromCart } = require('../controllers/cartController');
const router = express.Router();
const auth = require('../middleware/auth');

router.get('/', auth, getCart);
router.post('/', auth, addToCart);
router.delete('/', auth, removeFromCart);

module.exports = router;
