const mongoose= require("mongoose")
const marketplace_InventarySchema= new mongoose.Schema({
    userId:{
        type:String
    },
    odometers:{
        type:String,
        required:[true,"Price is required"]
    },
    majorScratches:{
        type:String,
        
    },
    originalPaint:{
        type:String,
        required:[true,"Color is required"]
    },
    noOfAccidentRepoted:{
        type:String,
        required:[true,"Accident no is required"]
    },
    numberOfPreviousBuyer:{
        type:String,
        required:[true,"No of previous buyer is required"]
    },
    registrationPlace:{
        type:String,
        required:[true,"registartion place is required"]
    }
})
const marketplace_InventaryModel= new mongoose.model("marketplace_Inventary",marketplace_InventarySchema)
module.exports= marketplace_InventaryModel;