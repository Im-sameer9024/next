import express from "express";
import { auth } from "../middlewares/auth.middleware.js";
import { getPost,getPosts,createPost,updatePost,deletePost } from "../controllers/Post.js";
const route = express.Router();

route.get("/allPosts",getPosts)
route.get("/post/:postId",getPost)
route.post("/createPost",auth,createPost)
route.patch("/updatePost/:postId",auth,updatePost)
route.delete("/deletePost/:postId",auth,deletePost)

export default route;
