import React, { useEffect, useState } from "react";
import "./checkout.css";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      setTimeout(() => {
        alert("Payment Successful!");
        localStorage.removeItem('price');
        window.location.href = "/";
      
    },1000)
   
    };
 
    
   

  return (
    <div className="checkout-container">
          <h2>Checkout</h2>
          <p style={{color:'gray'}}>Total Amount <span style={{fontSize:'18px', fontWeight:'bold'}}>{localStorage.getItem('price')}</span></p>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label>Name on Card</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Card Number</label>
          <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} maxLength="16" required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Expiration Date</label>
            <input type="text" name="expiry" value={formData.expiry} onChange={handleChange} placeholder="MM/YY" required />
          </div>

          <div className="form-group">
            <label>CVV</label>
            <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} maxLength="3" required />
          </div>
        </div>

        <div className="form-group">
          <label>Billing Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>

        <button type="submit" className="checkout-btn" >Pay Now</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
