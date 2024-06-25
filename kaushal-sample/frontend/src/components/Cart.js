import React, { useState, useEffect } from 'react';
import { getCart, removeFromCart, addToCart } from '../services/api';

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await getCart();
        setCart(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCart();
  }, []);

  const handleRemove = async (productId) => {
    try {
      await removeFromCart(productId);
      setCart((prevCart) => ({
        ...prevCart,
        products: prevCart.products.filter((product) => product.product._id !== productId),
      }));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleIncrease = async (productId) => {
    try {
      await addToCart(productId, 1);
      setCart((prevCart) => ({
        ...prevCart,
        products: prevCart.products.map((product) =>
          product.product._id === productId ? { ...product, quantity: product.quantity + 1 } : product
        ),
      }));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDecrease = async (productId) => {
    try {
      await addToCart(productId, -1);
      setCart((prevCart) => ({
        ...prevCart,
        products: prevCart.products.map((product) =>
          product.product._id === productId ? { ...product, quantity: product.quantity - 1 } : product
        ),
      }));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {error && <p className="error">{error}</p>}
      {cart ? (
        <div>
          {cart.products.map((item) => (
            <div key={item.product._id} className="cart-item">
              <img src={item.product.image} alt={item.product.name} />
              <h3>{item.product.name}</h3>
              <p>{item.product.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleIncrease(item.product._id)}>Increase</button>
              <button onClick={() => handleDecrease(item.product._id)}>Decrease</button>
              <button onClick={() => handleRemove(item.product._id)}>Remove</button>
            </div>
          ))}
          <h3>Total: {cart.total}</h3>
        </div>
      ) : (
        <p>Loading cart...</p>
      )}
    </div>
  );
};

export default Cart;
