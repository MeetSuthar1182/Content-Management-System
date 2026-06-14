import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import './AdminDashboard.css'

const AdminDashboard = () => {
  //state for tab activation
  const [activeTab, setActiveTab] = useState('create');
  //create blog state
  const [title, setTitle] = useState('');
  const [url, setImgurl] = useState('');
  const [content, setContent] = useState('');
  const [editId, setEditid] = useState(null);

  //blog array state
  const [blogs, setBlogs] = useState([]);

  //structure for form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //geting blogs from backend
  useEffect(() => {
    getBlogs();
  }, [])
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

  //create blog function
  async function newPost() {
    try {
      const newBlog = await fetch("http://localhost:3000/cms/blog", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: title,
          url: url,
          content: content
        })
      });

      const myBlog = await newBlog.json();

      await getBlogs();
    } catch (error) {
      console.log("err", error)
    }
    setTitle('');
    setImgurl('');
    setContent('');
  }

  //delete blog function
  async function deletePost(id) {
    try {
      await fetch(`http://localhost:3000/cms/blog/${id}`, {
        method: 'DELETE'
      });
      getBlogs();
    } catch (error) {
      console.log(error);
    }
  }

  //updating function req to backend
  async function updatingReq(id) {
    try {
      await fetch(`http://localhost:3000/cms/blog/${id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: title,
          url: url,
          content: content
        })
      });
      getBlogs();
      setEditid(null);
    } catch (error) {
      console.log("err", error)
    }
  }
  //updating blogs
  async function updatePost(blog) {
    setEditid(blog._id);

    setTitle(blog.title);
    setImgurl(blog.url);
    setContent(blog.content);

    setActiveTab('create');
    console.log(blog)
  }

  //new admin register function
  async function newAdmin(data) {
    try {
      const newLogin = await fetch("http://localhost:3000/cms/newAdmin", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const myData = await newLogin.json();
    } catch (err) {
      console.log("err", err)
    }
  }

  return (
    <div className="dashboard-container">

      {/* ================= SIDEBAR MENU ================= */}
      <aside className="sidebar">
        <div className="sidebar-brand">Admin<span>Panel</span></div>
        <ul className="sidebar-menu">
          {/* Tip: In par click handlers lagao aur active class ko dynamic banao */}
          <li className={activeTab === 'create' ? 'active' : ''} onClick={() => setActiveTab('create')}>✏️ Create Blog</li>
          <li className={activeTab === 'manage' ? 'active' : ''} onClick={() => setActiveTab('manage')}>📂 Manage Blogs</li>
          <li className={activeTab === 'new-admin' ? 'active' : ''} onClick={() => setActiveTab('new-admin')}>👤 Add New Admin</li>
          <li className="logout-btn">🚪 Logout</li>
        </ul>
      </aside>

      {/* ================= MAIN WORKSPACE AREA ================= */}
      <main className="dashboard-content">

        {/* SECTION A: CREATE / EDIT FORM BOX */}
        {/* Tip: Is poore div ko tab state ke basis par show/hide karna */}
        {activeTab === 'create' && (
          <div className="dashboard-card">
            <h2>📝 Create New Blog Post</h2>
            <form className="blog-form" onSubmit={(e) => {
              e.preventDefault();
              if (editId) {
                updatingReq(editId)
              } else {
                newPost();
              }
            }}>
              <div className="form-group">
                <label>Blog Title</label>
                <input type="text" placeholder="Enter catchy title..." value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>

              <div className="form-group">
                <label>Image URL</label>
                <input type="text" placeholder="Paste image link here..." value={url} onChange={(e) => setImgurl(e.target.value)} />
              </div>

              <div className="form-group">
                <label>Blog Content</label>
                <textarea rows="8" placeholder="Write your core article here..." value={content} onChange={(e) => setContent(e.target.value)}></textarea>
              </div>

              <button type="submit" className="submit-form-btn">Publish Post</button>
              <button type="button" className="cancel-btn">Cancel Edit</button>
            </form>
          </div>
        )}

        {/* SECTION B: MANAGE BLOGS TABLE LIST */}
        {/* Tip: Is card ko tab state ke basis par manage karna aur rows ko loop (.map) se render karna */}
        {activeTab === 'manage' && (
          <div className="dashboard-card" style={{ marginTop: '30px' }}>
            <h2>📂 Manage All Blog Posts</h2>
            <div className="table-responsive">
              <table className="blog-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Static Example Row 1: Is structure ko map ke andar dalo */}
                  {blogs.map((blog) => (
                    <tr key={blog._id}>
                      <td>{blog.title}</td>
                      <td>{blog.createdAt}</td>
                      <td>
                        {/* Tip: Edit/Delete buttons par specific row ki unique ID target karo */}
                        <button className="action-btn edit" onClick={() => updatePost(blog)}>✏️ Edit</button>
                        <button className="action-btn delete" onClick={() => deletePost(blog._id)}>🗑️ Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* SECTION C: REGISTER NEW ADMIN */}
        {activeTab === 'new-admin' && (
          <div className="dashboard-card" style={{ marginTop: '30px' }}>
            <h2>👤 Register a New Admin</h2>
            <p style={{ color: '#666', marginBottom: '20px' }}>Add a new admin to manage the blog dashboard.</p>
            <form className="blog-form" onSubmit={handleSubmit(newAdmin)}>
              <div className="form-group">
                <input type="text" placeholder="New Admin Username" {...register('username', {
                  required: "Please enter your name!!!",
                })}
                />
                {errors.username && <p className='err-msg'>{errors.username.message}</p>}
              </div>
              <div className="form-group">
                <input type="email"
                  placeholder="New Admin Email"
                  {...register('email', {
                    required: "Please enter your email!!!",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format!!!"
                    }
                  })} />
                {errors.email && <p className='err-msg'>{errors.email.message}</p>}
              </div>
              <div className="form-group">
                <input type="password"
                  placeholder="Temporary Password"
                  placeholder="Enter Your Password"
                  {...register('password', {
                    required: "please enter your password",
                    minLength: {
                      value: 8,
                      message: "password must be at least 8 characters"
                    }
                  })}
                />
                {errors.password && <p className='err-msg'>{errors.password.message}</p>}
              </div>
              <button type="submit" className="submit-form-btn">Register Admin</button>
            </form>
          </div>
        )}

      </main>
    </div>
  )
}

export default AdminDashboard