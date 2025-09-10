import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Hotels.css';

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/hotels/')
      .then(response => setHotels(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleBookNow = (hotel) => {
    navigate('/form', { state: { hotel } });
  };

  return (
    <div style={{padding: '20px', fontFamily: 'Arial, sans-serif'}}>
      <h1>Book Your Hotel in India</h1>
      <div className="hotel-container">
        {hotels.map((hotel, index) => (
          <div className="hotel-card" key={index}>
            <img src={hotel.image} alt={hotel.name} />
            <div className="hotel-info">
              <h3>{hotel.name}</h3>
              <p>Room Size: {hotel.roomSize}</p>
              <p>Location: {hotel.location}</p>
              <p>Amenities: {hotel.amenities.join(', ')}</p>
              <div className="hotel-price">₹{hotel.price}/night</div>
              <button className="book-button" onClick={() => handleBookNow(hotel)}>
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
