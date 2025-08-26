import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"

dotenv.config();//.env 
connectDB()//Mongodb connection initilize

const app = express();

app.use(cors());// to enable cross origin (frontend-port3000,backend-port5000).Default - browers blocks cross origin request.
app.use(express.json()); //parse incoming requests

app.use('/',userRoutes)//middleware

app.get('/',(req,res)=>{
    res.send('Primary Route')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>console.log(`server running at ${PORT}`))  
