import React, { useState, useEffect } from 'react'
import './Bloglist.css'
import Blogcard from './Blogcard.jsx';

const Bloglist = () => {
  const [blogs, setBlogs] = useState([]);
 
  //getting blogs
  async function getBlogs() {
    try {
      const blogData = await fetch("http://localhost:3000/cms/blog", {
        method: 'GET',
      });
      const data = await blogData.json();

      setBlogs(data);
    } catch (error) {
      console.log("err", error)
    }
  }

  useEffect(()=>{
    getBlogs();
  }, [])
    
  return (
    <main className="blog-list-container">
      <div className="blog-feed">
        {blogs.map((blog)=>(
          <Blogcard 
            key={blog._id}
            id={blog._id}
            title={blog.title}
            description={blog.content}
            date={blog.createdAt}
            image={blog.url}
          />
        ))}

      </div>
    </main>
  )
}

export default Bloglist