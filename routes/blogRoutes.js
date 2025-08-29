import express from "express";
import { addBlog, deleteBlogById, getAllBlogs, getBlogByid, togglePublish } from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";
import { addComment, getBlogComments } from "../controller/blogController.js";

const blogRouter = express.Router();

blogRouter.post("/add", upload.single('image'), auth, addBlog);

blogRouter.get('/all', getAllBlogs);
blogRouter.get('/:blogId', getBlogByid);
blogRouter.post('/delete', auth, deleteBlogById);
blogRouter.post('/toggle-publish', auth, togglePublish);
blogRouter.post('/add-comment',addComment)
blogRouter.post('/comments',getBlogComments)

export default blogRouter;
