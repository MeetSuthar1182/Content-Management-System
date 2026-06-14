import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };
    return (
        <nav className="navbar">
            {/* Logo / Brand Name */}
            <div className="logo">
                CMS<span>Blog</span>
            </div>

            {/* Hamburger Menu Icon for Mobile */}
            <div
                className={`menu-toggle ${isActive ? 'is-active' : ''}`}
                onClick={toggleMenu}
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            {/* Navigation Links */}
            <ul className={`nav-links ${isActive ? 'active' : ''}`}>
                <li>
                    <NavLink
                        to={"/home"}
                        className={({ isActive }) => isActive ? "active-page" : ""}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/about"}
                        className={({ isActive }) => isActive ? "active-page" : ""}
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar