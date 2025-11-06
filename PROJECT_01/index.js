import express, { urlencoded } from "express";
import users from "./MOCK_DATA.json" with { type: "json" };
import fs from "fs";
import mongoose from "mongoose";
import User from "./models/user.js";
import userRouter from "./routes/user.js"
import connectMongoDb from "./connection.js";
import logReqRes from "./middlewares/middleware.js";


const app = express();
const PORT  = 8000;

// connection
connectMongoDb();


app.use(urlencoded({extended: false}));

// middleware
app.use(logReqRes);


// Routes
app.use("/api/users", userRouter);
app.use("/api/user", userRouter);

app.get('/', (req, res)=>{
    return res.send("Welcome to Home Page");
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})