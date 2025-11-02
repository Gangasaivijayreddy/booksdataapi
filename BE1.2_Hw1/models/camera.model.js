const mongoose =require("mongoose")

const CameraSchema=new mongoose.Schema({
    title:String,
    imgUrl:String,
    rating:{
        type:Number,
        min:0,
        max:5,
        default:0,
    },
    ratingsGiven:Number,
    reviews:String,
    flipCartAssured:Boolean,
    price:Number,
    mrp:Number,
    discount:Number,
    itemsRemaining:Number,
    specifications:[
       {
        resolution:String,
        wifi:String,
        warrenty:String,
       }

    ]

})

const Camera=mongoose.model("Camera",CameraSchema);

module.exports=Camera