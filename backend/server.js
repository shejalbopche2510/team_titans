const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db")
const app = express();

//connect mongoDB
connectDB();


//middleware
app.use(cors());
app.use(express.json());

//test route
app.get("/",(req, res)=>{
    res.json({
        message:"server runing"
    });
});

//server
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
console.log(`server running on port ${PORT}`);
})