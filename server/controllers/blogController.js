import fs from 'fs';
import imagekit from '../configs/imageKit.js';
import Blog from '../models/Blog.js';
import comment from '../models/Comment.js';
import main from '../configs/gemini.js';
import { response } from 'express';

export const addBlog = async(req, res) => {
    try {
        const { title, subTitle, description, category, isPublished } = JSON.parse(req.body.blog);
        const imageFile = req.file;

        //check if all fields are present
        if (!title || !description || !category || !imageFile) {
            return res.json({ success: false, message: "Missing required fields" })
        }

        const fileBuffer = fs.readFileSync(imageFile.path)
            //upload image to imagekit
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/blogs"
        })

        //optimization of imagekit
        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                { quality: 'auto' },
                { format: 'webp' },
                { width: '1280' }
            ]
        })
        const image = optimizedImageUrl;

        await Blog.create({ title, subTitle, description, category, image, isPublished })

        res.json({ success: true, message: "Blog added Successfully" })

    } catch (error) {

        res.json({
            success: false,
            message: error.message
        })
    }
}

export const getAllBlogs = async(req, res) => {
    try {
        const blogs = await Blog.find({ isPublished: true })
        res.json({ success: true, blogs })
    } catch (error) {

        res.json({
            success: false,
            message: error.message
        })
    }
}

export const getBlogById = async(req, res) => {
    try {
        const { blogId } = req.params;
        const blog = await Blog.findById(blogId);
        if (!blog) {
            return res.json({ success: false, message: "Blog not Found" })
        }
        res.json({ success: true, blog })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export const deleteBlogById = async(req, res) => {
    try {
        const { id } = req.body;
        await Blog.findByIdAndDelete(id);

        //Delete all comment jo post se deleted hai 
        await comment.deleteMany({ blog: id })


        res.json({ success: true, message: "Blog Deleted Successfully" })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export const togglePublish = async(req, res) => {
    try {
        const { id } = req.body;
        const blog = await Blog.findById(id);
        blog.isPublished = !blog.isPublished;
        await blog.save();
        res.json({ success: true, message: "Blog Status Updated" })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export const addComment = async(req, res) => {
    try {
        const { blog, name, content } = req.body;
        await comment.create({ blog, name, content }); //yha comment me confusion Small ya Capital
        res.json({ success: true, message: "Comment Added for Review" })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export const getBlogComments = async(req, res) => {
    try {
        const { blogId } = req.body;
        const comments = await comment.find({ blog: blogId, isApproved: true }).sort({ createdAt: -1 });
        res.json({ success: true, comments })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export const generateContent = async(req, res) => {
    try {
        console.log("Request body:", req.body); // check prompt
        const { prompt } = req.body;

        if (!prompt) return res.status(400).json({ success: false, message: "Prompt is required" });

        const content = await main(prompt + " Generate a blog description in simple text.");
        console.log("Generated content:", content);

        res.json({ success: true, content });
    } catch (err) {
        console.error("Gemini Error:", err);
        res.status(500).json({ success: false, message: err.message });
    }
};