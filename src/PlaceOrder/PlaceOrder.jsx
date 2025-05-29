import React, { useState } from 'react';
import './PlaceOrder.css';

function PlaceOrder() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5050/place-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(data => {
        alert('Order placed successfully!');
        console.log(data);
      })
      .catch(err => console.error('Error placing order:', err));
  };

  return (
    <div className="place-order-container">
      <h2>Place Your Order</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
        <textarea name="address" placeholder="Address" onChange={handleChange} required />
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}

export default PlaceOrder;