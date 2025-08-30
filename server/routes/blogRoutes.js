import express from 'express';
import { addBlog } from '../controllers/BlogController.js';
import upload from '../middleware/multer.js';

const blogRouter = express.Router();

// Works for both: file upload OR direct URL
blogRouter.post("/add", upload.single('image'), addBlog);

export default blogRouter;
