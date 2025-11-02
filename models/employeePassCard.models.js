const mongoose=require("mongoose");

const PassCardSchema=new mongoose.Schema({
    idNo:Number,
    name:String,
    role:String,
    dOB:String,
    mail:String,
    telNo:Number,
    address:String,
})

const PassCard= mongoose.model("PassCard",PassCardSchema)

module.exports=PassCard