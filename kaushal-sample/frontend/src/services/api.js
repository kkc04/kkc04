import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const register = (userData) => axios.post(`${API_URL}/auth/register`, userData);
const login = (userData) => axios.post(`${API_URL}/auth/login`, userData);
const forgotPassword = (email) => axios.post(`${API_URL}/auth/forgot-password`, { email });
const resetPassword = (token, password) => axios.post(`${API_URL}/auth/reset-password/${token}`, { password });

const getProducts = () => axios.get(`${API_URL}/products`);
const addToCart = (productId, quantity) => axios.post(`${API_URL}/cart`, { productId, quantity }, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});
const getCart = () => axios.get(`${API_URL}/cart`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});
const removeFromCart = (productId) => axios.delete(`${API_URL}/cart`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  data: { productId }
});

const addProduct=(productData)=>axios.post('${API_URL}/products',productData,{
    headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
});
export { register, login, forgotPassword, resetPassword, getProducts, addToCart, getCart, removeFromCart,addProduct };
