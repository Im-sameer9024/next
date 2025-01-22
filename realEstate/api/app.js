import express from 'express';
import 'dotenv/config.js';
import userAuth from './routes/authRoute.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import User from './routes/userRoute.js'
import fileUpload from 'express-fileupload';
import Post from './routes/postRoute.js'


const app = express();
const port = process.env.PORT || 5000;

app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true
    }
))
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))


app.use("/api/user",userAuth);
app.use("/api/user",User)
app.use("/api/post",Post)


app.get("/",(req,res) =>{
    res.send("Server is running")
})

app.listen(port,() =>{
    console.log(`Server is running on port ${port}`)
})