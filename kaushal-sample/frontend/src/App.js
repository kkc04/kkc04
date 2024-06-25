// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
//import AuthForm from "./components/AuthForm";
import ForgotPassword from "./components/ForgotPassword.js";
// import ResetPassword from "./components/ResetPassword";
 
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import WholesaleBuy from "./pages/WholesaleBuy";
import OurStory from "./pages/OurStory";
import ContactUs from "./pages/ContactUs";
import Offers from "./pages/Offers";

import Cart from "./components/Cart";
import Footer from "./components/Footer";
import CartProvider from "./context/CartContext";
import AddProductForm from "./components/AddProductForm";



import "./App.css";

const App = () => {
  return (
    <CartProvider>
    <Router>
      <div className="App">
        <Navbar />
         
         
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/wholesale-buy" element={<WholesaleBuy />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/offers" element={<Offers />} />
          {/* <Route path="/auth" element={<AuthForm />} /> */}
           
          <Route path="/cart" element={<Cart />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
          <Route path="/add-product" element={<AddProductForm />} />


        </Routes>
        <Footer />
      </div>

    </Router>
    </CartProvider>
  );
};

export default App;

