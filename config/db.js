const mongoose=require("mongoose");
const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`mongoDB connect ${mongoose.connection.host}`)

    }catch(error){
        console.log(`Mongodb Server Issue ${error}`)
    }
}
module.exports= connectDB;