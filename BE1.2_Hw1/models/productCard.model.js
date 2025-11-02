const mongoose=require("mongoose")

const ProductCardSchema=new mongoose.Schema({
    product:String,
    tag:String,
    productInfo:String,
    color:{
        type:String,
        enum:["Blue","Red","green","orange","violet"]
    },
    size:{
        type:Number,
        enum:[6,7,8,9,10,11]
    },
    price:Number,
})

const ProductCard=mongoose.model("ProductCard",ProductCardSchema);

module.exports=ProductCard