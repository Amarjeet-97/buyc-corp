const express= require("express");
const morgan= require("morgan");
const dotenv= require("dotenv");
const connectDB = require("./config/db");

//dotenv config
dotenv.config();

//mongoDb connection
connectDB();

//rest object
const app= express();

//middleware
app.use(express.json());
app.use(morgan('dev'));



//routes
app.use("/api/v1/user",require("./routes/userRoutes"))

//listen port
const port= process.env.PORT || 8080
app.listen(port,()=>{
    console.log(`Server running in ${process.env.DEV_MODE} mode on port ${port}`)
})