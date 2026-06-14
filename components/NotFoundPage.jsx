import React from 'react';
import './NotFoundPage.css';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

  const navigate = useNavigate();

  function goHome(){
    navigate('/home')
  }
  return (
    <div className="fallback-container">
      <div className="fallback-card">
        
        {/* Error Code & Warning Header */}
        <div className="error-header">
          <h1 className="error-code">404</h1>
          <h2 className="error-title">Oops! You've Hit a Wrong Route</h2>
          <p className="error-subtitle">Lagta hai aap kisi galat raste par aa gaye hain. Pareshan mat hoiye, yahan se sahi rasta mil jayega!</p>
        </div>

        <hr className="divider" />

        {/* CMS Introduction Section */}
        <div className="cms-intro-section">
          <h3>📦 Project Insight: Micro-CMS</h3>
          <p>
            Yeh ek lightweight, high-performance **Content Management System (CMS)** hai jise 
            completely **MERN Stack (MongoDB, Express.js, React, Node.js)** ka use karke scratch se 
            banya gaya hai. Isme clean architecture, modular file inclusion, aur solid dynamic data rendering ka 
            istemal kiya gaya hai.
          </p>
        </div>

        {/* Working Routes Guide Map */}
        <div className="routes-guide-section">
          <h3>🗺️ Valid Working Routes (Sahi Raste)</h3>
          <p className="guide-text">Aap is system ke data aur features ko access karne ke liye niche diye gaye links par ja sakte hain:</p>
          
          <ul className="routes-list">
            <li>
              <span className="route-badge">/</span> 
              <span className="route-desc"><strong>Home Page:</strong> Yahan visitor side ke saare active blogs ek clean dynamic card grid layout mein dikhenge.</span>
            </li>
            <li>
              <span className="route-badge">/home</span> 
              <span className="route-desc"><strong>About Page:</strong> CMS ka core vision, tech-stack detail aur motive padhne ke liye.</span>
            </li>
            <li>
              <span className="route-badge">/admin</span> 
              <span className="route-desc"><strong>Admin Gateway:</strong> Authorized entry space jahan se co-admins sign-in kar sakte hain.</span>
            </li>
            <li>
              <span className="route-badge">/admindashboard</span> 
              <span className="route-desc"><strong>Admin Dashboard:</strong> Main control room jahan se data ka Creation, Populate-Edition aur Deletion handle hota hai.</span>
            </li>
          </ul>
        </div>

        {/* Global Action Button */}
        {/* Tip: Is button par Link or useNavigate bind karke homepage ('/') par redirect kar dena */}
        <div className="action-wrapper">
          <button className="back-to-safety-btn" onClick={goHome}>🚀 Go Back To Home Page</button>
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;