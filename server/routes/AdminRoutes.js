import express from "express";
import {adminLogin} from "controller\adminController.js";
import { approveCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments, getDashboard } from "server\controllers\AdminController.js";
import auth from "server\middleware\auth.js"
const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);
adminRouter.get("/comments",auth,getAllComments);
adminRouter.get("/blogs",auth,getAllBlogsAdmin);
adminRouter.post("/delete-comment",auth,deleteCommentById);
adminRouter.post("/approve-comment",auth,approveCommentById);
adminRouter.get("/dashboard",auth,getDashboard);

export default adminRouter;




