import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Singleblogpage.css';

const Singleblogpage = () => {

  const[blog, setBlog] = useState(null);
  const {id} = useParams();

  async function getSingleBlog() {
    try {
      const response = await fetch(`http://localhost:3000/cms/blog/${id}`,{
        method: 'GET'
      });
      const data = await response.json();
      setBlog(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getSingleBlog();
  }, [])
  return (
    <div className="single-blog-container">
      {blog && (
        <article className="single-blog-card">
        
        {/* Blog Main Image */}
        
        <div className="single-blog-img-holder">
          <img 
            src={blog.url} 
            alt="Blog Featured Cover" 
            className="single-blog-img" 
          />
        </div>

        {/* Blog Content Section */}
        <div className="single-blog-body">
          
          {/* Metadata: Date and Author */}
          <div className="single-blog-meta">
            <span>{blog.createdAt}</span>
            <span className="meta-divider">•</span>
            <span>👤 Written by Admin</span>
          </div>

          {/* Core Title */}
          <h1 className="single-blog-title">{blog.title}</h1>

          {/* Detailed Paragraphs */}
          {/* Tip: Kal ko backend database se jo text content (`blog.content`) aayega, use yahan map ya render karna */}
          <div className="single-blog-text">
            <p>{blog.content}</p>
          </div>

        </div>
      </article>
      )}
    </div>
  );
};

export default Singleblogpage;