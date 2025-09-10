import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <video autoPlay loop muted playsInline className="background-video">
                <source src="/travel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='body'>
                <h1 className="main-title">Travelluxe</h1>
                <h2 className="subtitle">
                    <span className="multiline-text">
                        Welcome to a world of timeless elegance.<br />
                        Discover and book exquisite stays crafted for the discerning traveler.
                    </span>
                </h2>
                <button onClick={() => navigate('/hotels')} className='button cta-button'>View Available Hotels</button>
                <div className="feature-section">
                    <h3>Why Book With Us?</h3>
                    <div className="features">
                        <div className="feature-card">
                            <img src="/delhi.jpg" alt="Curated Hotels" className="feature-img" />
                            <h4>Curated Hotels</h4>
                            <p>Handpicked stays in India's top destinations for every taste and budget.</p>
                        </div>
                        <div className="feature-card">
                            <img src="/goa.jpg" alt="Easy Booking" className="feature-img" />
                            <h4>Easy Booking</h4>
                            <p>Simple, secure, and fast booking process with instant confirmation.</p>
                        </div>
                        <div className="feature-card">
                            <img src="/mumbai.jpg" alt="24/7 Support" className="feature-img" />
                            <h4>24/7 Support</h4>
                            <p>Our team is here to help you anytime, anywhere during your journey.</p>
                        </div>
                        <div className="feature-card">
                            <img src="/jaipur.jpg" alt="Best Prices" className="feature-img" />
                            <h4>Best Prices</h4>
                            <p>Enjoy exclusive deals and the best rates for your perfect stay.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;