const mongoose=require("mongoose");
// const dotenv=require("dotenv")
// dotenv.config({path:'./config.env'})
// const db=process.env.Database;
const db='mongodb://127.0.0.1/RegisterPerson'
mongoose.connect(db,{useNewUrlParser:true},{useUnifiedTopology:true})
.then(  ()=>console.log("Connection Successful"))
.catch((err)=>console.log("unsucessfull"));
