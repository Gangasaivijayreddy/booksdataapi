const mongoose=require("mongoose");

const GrapesSchema= new mongoose.Schema({
    fruit:String,
    discription:String,
    calories:Number,
    carbohydrades:Number,
    protien:Number,
    fat:Number,


})

const Grapes=mongoose.model("Grapes",GrapesSchema)

module.exports=Grapes;