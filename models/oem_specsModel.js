const mongoose= require("mongoose")
const oem_specsSchema= new mongoose.Schema({
    userId:{
        type:String,
    },
    model:{
        type:String,
        required:[true,"model is required"]

    },
    yearOfModel:{
        type:String,
        required:[true,"Year is required"]
    },
    price:{
        type:String,
        required:[true,"Price is required"]
    },
    colors:{
        type:String,
        required:[true,"color is required"]
    },
    milleage:{
        type:String,
        required:[true,"milleage is required"]
    },
    power:{
        type:String,
        required:[true,"power is required"]
    },
    maxSpeed:{
        type:String,
        required:[true,"milleage is required"]
    }

})
const oem_specsModel= new mongoose.model("oem_spec",oem_specsSchema);
module.exports= oem_specsModel