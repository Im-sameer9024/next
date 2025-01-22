import express from "express";
import { register, login, logout,forgotPassword } from "../controllers/Auth.js";

const route = express.Router();

route.post("/register", register);

route.post("/login", login);

route.get("/logout", logout);

route.put("/forgot-password", forgotPassword);

export default route;
