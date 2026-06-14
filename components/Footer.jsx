import React from 'react'
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* Logo / Brand Name */}
        <div className="footer-logo">
          CMS<span>Blog</span>
        </div>
        
        {/* Copyright Text */}
        <p className="footer-text">
          &copy; {currentYear} All rights reserved. Built for creators.
        </p>
      </div>
    </footer>
  )
}

export default Footer