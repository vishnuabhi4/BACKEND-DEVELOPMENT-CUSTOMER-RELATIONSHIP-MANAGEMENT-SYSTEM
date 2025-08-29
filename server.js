import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./app/routes/userRoutes.js"
import customerRoutes from "./app/routes/customerRoutes.js"
import caseRoutes from "./app/routes/caseRoutes.js"

dotenv.config();//.env 
connectDB()//Mongodb connection initilize

const app = express();

app.use(cors());// to enable cross origin (frontend-port3000,backend-port5000).Default - browers blocks cross origin request.
app.use(express.json()); //parse incoming requests

app.use("/api/users", userRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/cases", caseRoutes);

app.get('/',(req,res)=>{
    res.send('Primary Route')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>console.log(`server running at ${PORT}`))  
