import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';

const BASE_URL = 'http://127.0.0.1:8000/api'; // Django backend

const AdminDashboard = () => {
  const [hotels, setHotels] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchHotels();
    fetchBookings();
  }, []);

  const fetchHotels = async () => {
    try {
      const res = await fetch(`${BASE_URL}/hotels`);
      const data = await res.json();
      setHotels(data);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };

  const fetchBookings = async () => {
  try {
    const res = await fetch(`${BASE_URL}/bookings/all/`);
    const data = await res.json();
    setBookings(data);
  } catch (error) {
    console.error("Error fetching bookings:", error);
  }
};

  const deleteHotel = async (id) => {
    if (!window.confirm("Are you sure you want to delete this hotel?")) return;

    try {
      const res = await fetch(`${BASE_URL}/hotels/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Hotel deleted!");
        fetchHotels();
      } else {
        alert("Failed to delete hotel.");
      }
    } catch (error) {
      console.error("Error deleting hotel:", error);
    }
  };

  return (
    <div className="admin-container">
      <h1>🛎️ Admin Dashboard</h1>

      <div className="dashboard-section">
        <h2>🏨 Hotel List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Price (₹)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {hotels.length > 0 ? hotels.map((hotel) => (
              <tr key={hotel.id}>
                <td>{hotel.name}</td>
                <td>{hotel.location}</td>
                <td>{hotel.price}</td>
                <td>
                  <button onClick={() => deleteHotel(hotel.id)}>Delete</button>
                </td>
              </tr>
            )) : (
              <tr><td colSpan="4">No hotels found.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="dashboard-section">
        <h2>📦 Booking Records</h2>
        <table>
          <thead>
            <tr>
              <th>Guest Name</th>
              <th>Hotel</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? bookings.map((booking, i) => {
            const [checkIn, checkOut] = booking.dates?.split(' to ') || ['-', '-'];

              return (
                <tr key={i}>
                  <td>{booking.guest_name}</td>
                  <td>{booking.hotel_name}</td>
                  <td>{checkIn}</td>
                  <td>{checkOut}</td>
                  <td>Confirmed</td> {/* hardcoded or add status in backend later */}
                </tr>
              );
            }) : (
            <tr><td colSpan="5">No bookings available.</td></tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
