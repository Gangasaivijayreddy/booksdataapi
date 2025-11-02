const mongoose=require("mongoose")
require("dotenv").config();

const mongoUri=process.env.MONGOURL

const connectDataBase=async()=>{
   await mongoose.connect(mongoUri).then(()=>{
    console.log("Connection Successfull");
   }).catch((error)=>{
    console.log("Error while connecting to dataBase",error)
   })
}

module.exports= {connectDataBase}