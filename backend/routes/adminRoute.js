import express from 'express';
import { Router } from 'express';
import adminModel from "../model/AdminModel.js";
import blogModel from '../model/BlogModel.js';
import { appendErrors } from 'react-hook-form';

const adminRouter = Router();


//main login route for admin
adminRouter.post('/login', async (req, res) => {
    const { username, email, password } = req.body;

    const admin = await adminModel.findOne({ email });

    if (!admin) {
        return res.status(401).json({
            message: "Email not found"
        });
    }

    if (admin.password !== password) {
        return res.status(401).json({
            message: "Wrong password"
        });
    }

    return res.status(200).json({
        message: "Login success"
    });
})

//new admin registration route
adminRouter.post('/newAdmin', async(req, res) => {
    try{
        const {username, email, password} = req.body;
        const new_admin = new adminModel({
            username,email,password
        });
        await new_admin.save();

        res.status(201).json({
            success: true,
            user: new_admin
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
})

//create blog route
// post req from frontend
adminRouter.post('/blog', async(req,res)=>{
    try {
        const {title,url,content} = req.body;
        const new_blog = new blogModel({
            title,url,content
        });
        await new_blog.save();

        res.status(201).json({
            success: true,
            blog: new_blog
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

//geting data from database
adminRouter.get('/blog', async(req, res)=>{
    try{
        const blogData = await blogModel.find();
        res.status(200).json(blogData);
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
})

//geting perticular id data
adminRouter.get('/blog/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        const blog = await blogModel.findById(id);
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

//deleting data from blog id
adminRouter.delete('/blog/:id', async(req, res)=>{
    try{
        const {id} = req.params;

        await blogModel.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "blog deleted"
        });
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
})

//updating data from blog
adminRouter.put('/blog/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        const {title,url,content} = req.body;

        await blogModel.findByIdAndUpdate(id, {title,url,content}, {new: true});
        res.status(200).json({
            success: true,
            message: "blog updated"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

export default adminRouter;