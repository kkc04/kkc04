import React, { useState } from 'react';

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    userType: 'buyer', // Default to buyer
    // Seller specific fields
    businessName: '',
    businessAddress: '',
    taxId: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      
      <select name="userType" value={formData.userType} onChange={handleChange}>
        <option value="buyer">Buyer</option>
        <option value="seller">Seller</option>
      </select>

      {formData.userType === 'seller' && (
        <>
          <input type="text" name="businessName" placeholder="Business Name" value={formData.businessName} onChange={handleChange} required />
          <input type="text" name="businessAddress" placeholder="Business Address" value={formData.businessAddress} onChange={handleChange} required />
          <input type="text" name="taxId" placeholder="Tax ID" value={formData.taxId} onChange={handleChange} />
        </>
      )}

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;
