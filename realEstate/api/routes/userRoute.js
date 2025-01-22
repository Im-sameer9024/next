import express from "express";
import { getAllUsers,getUser,updateUser,deleteUser } from "../controllers/User.js";
import {auth} from '../middlewares/auth.middleware.js'

const route = express.Router();

route.get("/all-users",getAllUsers)
route.get("/single-user/:userId",auth,getUser)
route.put("/update-user/:userId",auth,updateUser)
route.delete("/delete-user/:userId",auth,deleteUser)


export default route;
