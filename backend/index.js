import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connection from "./database/connection.js";
import AssRoute from "./Routes/AssRoute.js";
import router from "./Routes/userRoute.js";
const app=express();
app.use(express.json());
dotenv.config();
const Port_NO=process.env.PORT_NO ||4800;
app.use(cors());
connection();
app.get("/",(req,res)=>{
        res.send("hello");
});
app.use('/assignment',AssRoute)
app.use("/user",router);
app.listen(Port_NO,()=>{
    console.log("server created successfully");
})