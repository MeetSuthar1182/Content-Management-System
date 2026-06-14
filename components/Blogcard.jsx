import React from 'react'
import './Blogcard.css'
import { NavLink } from 'react-router-dom'

const Blogcard = ({title,id,description,date, image}) => {
  return (
    <article className="blog-card">
      {/* Blog Image Section */}
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
      </div>

      {/* Blog Content Section */}
      <div className="card-content">
        <span className="card-date">{date}</span>
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <NavLink className="read-more-btn" to={`/blog/${id}`}>Read More <span className="arrow">→</span></NavLink>
      </div>
    </article>
  )
}

export default Blogcard 