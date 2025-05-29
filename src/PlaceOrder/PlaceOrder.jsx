import React, { useState } from 'react';
import './PlaceOrder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function PlaceOrder() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    street_address: '',
    apt_number: '',
    state: '',
    zip: '',
  });

  // Assuming you have the order total somewhere, hardcoding here for demo:
  const orderTotal = 8199;

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      price: orderTotal,
    };

    fetch('http://localhost:5050/place-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToSend),
    })
      .then(res => res.json())
      .then(data => {
        alert('Address and order placed successfully!');
        console.log(data);
      })
      .catch(err => console.error('Error placing order:', err));
  };

  return (
    <div className="place-order-container">
      <h2><FontAwesomeIcon icon={faChevronLeft} />Shipping Address</h2>
      <div className="bottom-container">
        <div className="address">
          <form onSubmit={handleSubmit}>
            <h3>Add New Address</h3>
            <div className="name-input">
              
              <input
                name="first_name"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
              <input
                name="last_name"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
              </div>
            <input
              name="street_address"
              placeholder="Street Address"
              value={formData.street_address}
              onChange={handleChange}
              required
            />
            <div className="address-input">
              <input
                name="apt_number"
                placeholder="Apartment Number"
                value={formData.apt_number}
                onChange={handleChange}
              />
              <input
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                required
              />
              <input
                name="zip"
                placeholder="Zip Code"
                value={formData.zip}
                onChange={handleChange}
                required
              />
            </div>
            <div className="submit-buttons">
              <button onClick={() => window.location.href = '/Eclypse'}>Cancel</button>
              <button type="submit">Save This Address</button>
            </div>
          </form>
        </div>
        <div className="order_summary">
          <div className="order_summary_top">
            <p>By placing your order, you agree to our company Privacy policy and Conditions of use.</p>
          </div>
          <div className="order_summary_middle">
            <h6>Order Summary</h6>
            <span>Items</span>
            <span>Shipping and handling</span>
            <span>Before Tax</span>
            <span>Tax Collected</span>
          </div>
          <div className="order_summary_bottom">
            <span>Order Total <span>{orderTotal}</span></span>
            <button onClick={handleSubmit}>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;