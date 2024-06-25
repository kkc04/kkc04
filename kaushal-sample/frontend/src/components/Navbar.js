// src/components/Navbar.js
import React,{useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import AuthForm from './AuthForm';
import './Navbar.css';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/shop" activeClassName="active">Shop</NavLink>
        <NavLink to="/wholesale-buy" activeClassName="active">Bulk Order</NavLink>
        <NavLink to="/our-story" activeClassName="active">Our Story</NavLink>
        <NavLink to="/contact-us" activeClassName="active">Contact Us</NavLink>
        <NavLink to="/offers" activeClassName="active">Offers</NavLink>
      </div>
      <div className="navbar-right">
        <NavLink to="/cart" activeClassName="active">
        <img src="" alt="Cart"/>
        <span>{cartItems.length}</span>
        </NavLink>
        <input type="text" placeholder="Search" />
        {/* <NavLink to="/auth">Sign In</NavLink>  */}
        
        <AuthForm />
      </div>
    </nav>
  );
};

export default Navbar;
