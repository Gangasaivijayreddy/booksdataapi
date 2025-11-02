const mongoose=require("mongoose")

const CreditCardSchema= new mongoose.Schema({
    cardNo:Number,
    expiry:String,
    name:String,
})

const CreditCard=mongoose.model("CreditCard",CreditCardSchema)

module.exports=CreditCard