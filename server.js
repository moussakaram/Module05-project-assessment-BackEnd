import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRoute from "./routes/userRoute.js"
import productRoute from "./routes/productRoute.js"
import orderRoute from "./routes/orderRoute.js"
import cors from "cors"


const app = express();
dotenv.config();
const connect= async()=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("connect to the database successfully")
    }catch(error){
        console.log(error)
    }}
//midelware 
app.use(express.json())

app.use(express.urlencoded({ extended: true }));
app.use(cors("*"));


app.use("/api/user",userRoute)
app.use("/api/product",productRoute)
app.use("/api/order",orderRoute)






app.listen(8000,()=>{
    connect();
    console.log("server running on http://localhost:8000")
    

})