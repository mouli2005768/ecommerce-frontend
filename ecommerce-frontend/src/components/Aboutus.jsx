import React from 'react';
import '../components/style.css';
import { Link, Outlet } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h2>About Our Electronic Store</h2>
      <p>
        Welcome to our E-Commerce platform, your one-stop shop for the latest and greatest in electronics!
        We specialize in high-quality products, including computers, mobiles, laptops, and accessories.
      </p>

      <div className="about-grid">
        <Link to="/computers" className="about-link">
          <div className="about-item">        
            <img src="computers.jpeg" alt="High-performance Computers" />
            <h3>Computers</h3>
            <p>Find the best computers for gaming, work, and personal use.</p>
          </div>
        </Link>

        <Link to="/mobiles" className="about-link">
          <div className="about-item">
            <img src="mobiles.jpeg" alt="Latest Smartphones" />
            <h3>Mobiles</h3>
            <p>Latest smartphones from top brands at unbeatable prices.</p>
          </div>
        </Link>

        <Link to="/laptops" className="about-link">
          <div className="about-item">
            <img src="laptops.jpeg" alt="Powerful Laptops" />
            <h3>Laptops</h3>
            <p>Powerful laptops for professionals, students, and gamers.</p>
          </div>
        </Link>

        <Link to="/pendrives" className="about-link">
          <div className="about-item">
            <img src="accessories.jpg" alt="Electronic Accessories" />
            <h3>Accessories</h3>
            <p>Find the best accessories like pendrives, keyboards, and more.</p>
          </div>
        </Link>
      </div>

      {/* Outlet for nested routes */}
      <Outlet />

      {/* Navigation */}
      <div className="back-home">
        <Link to="/">⬅ Back to Home</Link>
      </div>
    </div>
  );
};

export default AboutUs;
