import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Form.css'

function Form() {
  const { state } = useLocation();
  const hotel = state?.hotel;

  const [formData, setFormData] = useState({
    guestName: '',
    phone: '',
    email: '',
    dates: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      hotel_name: hotel.name,
      guest_name: formData.guestName,
      phone: formData.phone,
      email: formData.email,
      dates: formData.dates
    };
    try {
      const response = await fetch('http://localhost:8000/api/bookings/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      setLoading(false);
      if (response.ok) {
        alert(`Thank you for booking ${hotel.name}, ${formData.guestName}!`);
      } else {
        alert('Error saving booking. Please try again.');
      }
    } catch (error) {
      setLoading(false);
      console.error('Error:', error);
      alert('Error connecting to server.');
    }
  };

  if (!hotel) {
    return <p className="form-error">No hotel selected. Please go back and select a hotel.</p>;
  }

  return (
    <div className="form-outer-container">
      <div className="form-header">
        <h2>Book Your Stay at <span className="form-hotel-name">{hotel.name}</span></h2>
        <p className="form-hotel-location">{hotel.location}</p>
      </div>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>Hotel Name:</label>
        <input type="text" className='input' value={hotel.name} readOnly />

        <label>Your Name:</label>
        <input
          type="text"
          className='input'
          name="guestName"
          value={formData.guestName}
          onChange={handleChange}
          required
          placeholder="Enter your full name"
        />

        <label>Phone Number:</label>
        <input
          type="text"
          className='input'
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="e.g. 9876543210"
        />

        <label>Email ID:</label>
        <input
          type="email"
          className="input"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="e.g. you@email.com"
        />

        <label>Booking Dates:</label>
        <input
          type="date"
          className='input'
          name="dates"
          value={formData.dates}
          onChange={handleChange}
          min={new Date().toISOString().split('T')[0]}
          required
        />

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Booking...' : 'Submit Booking'}
        </button>
      </form>
    </div>
  );
}

export default Form;
