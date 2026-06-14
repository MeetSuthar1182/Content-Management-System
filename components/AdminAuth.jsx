import React from 'react'
import { useState } from 'react';
import './AdminAuth.css'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import AdminDashboard from '../components/AdminDashboard'



const AdminAuth = () => {
    //here is navigate hook to navigate route /admindashboard
    const navigate = useNavigate();
    //use hook form structure
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    //admin register function
    async function adminSignup(data){
        const adminlogin = await fetch("http://localhost:3000/cms/login",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        });
        const myReq = await adminlogin.json();

        if (adminlogin.ok){
            navigate("/admindashboard");
        }else{
            alert(myReq.message);
        }
    }
    return (
        <div className="auth-container">
            <div className="auth-card">
                {/* Header Dynamic Title */}
                <div className="auth-header">
                    <h2>admin Register</h2>
                    <p>wel come back admin please ener you details</p>
                </div>

                {/* Dynamic Form */}
                <form className="auth-form" onSubmit={handleSubmit(adminSignup)}>

                    {/* Register state mein Username input extra dikhega */}
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            {...register('username', {
                                required: "Please enter your name!!!",
                            })}
                        />
                        {errors.username && <p className='err-msg'>{errors.username.message}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="admin@example.com"
                            {...register('email', {
                                required: "Please enter your email!!!",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email format!!!"
                                }
                            })}
                        />
                        {errors.email && <p className='err-msg'>{errors.email.message}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
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

                    {/* Action Button */}
                    <button type="submit" className="auth-btn">
                        sign up
                    </button>
                </form>

            </div>
        </div>
    )
}

export default AdminAuth