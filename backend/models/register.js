const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const jwt=require('jsonwebtoken')
const registerSchema=mongoose.Schema({
     
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    profession:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[
        {
        token: {
            type:String,
            required:true
        }
    }
    ]
})

// registerSchema.pre('save',async function (next){
//     if(this.isModified){
//         this.password=bcrypt.hash(this.password,12)
//         this.cpassword=bcrypt.hash(this.cpassword,12)                   
//     }
//     next();
// })
// registerSchema.methods.generateAuthToken = async function(){
//     try{
// let token=jwt.sign({_id:this._id},process.env.SECRET_KEY)
// this.tokens=this.tokens.concat({token:token})
// await this.save();
// return token;
//     }catch(err)
//     {
//         console.log(err)
//     }
// } 
const Register=new mongoose.model("Register",registerSchema)

module.exports=Register;