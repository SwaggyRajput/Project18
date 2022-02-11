const express=require("express");
const app=express();
const port=process.env.PORT || 6001
require("./db/conn")
const Register=require("./models/register")
const dotenv=require("dotenv")
dotenv.config({path:'./config.env'})
const db=process.env.Database;
// const jwt=require('jsonwebtoken')
// var cors=require('cors')
// app.use(cors())
const bodyParser = require("body-parser");
var cors = require('cors');
app.use(bodyParser.urlencoded({     
    extended: false
  }));

app.use(cors());



app.post("/register",async(req,res)=>{
        const {name,email,phone,profession,password,cpassword} = req.body;
              const registerEmployee=new Register({
              name,email,phone,profession,password,cpassword
            })
            try{
            const register=await registerEmployee.save()
            console.log(register);
    }catch(error){
        res.status(400).send(error)
    }
})

// app.post('./login',async(req,res)=>{
// try{
//     const {name,password,cpassword} =req.body;
//     if(!name || !password || !cpassword || (password!=cpassword))
//     return res.status(400).alert("Fill the login credentials")
//     else{ 
//     const userLogin=await Register.findMany({name:name,password:password,cpassword:cpassword})
//       if(userLogin)
//       {
//           const token = await userLogin.generateAuthToken();
//           res.cookie("jwtoken",token,{
//               expires:new Date(Date.now()+23456788899),
//               httpOnly:true
//           })
//       alert("Login successfully")

//       }
//       else{
//           alert("Incorrect login credentials")
//       }

//     }
// }catch(err)
// {
// console.log(err)
// }




// })






app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})





// const isMatch=await bcrypt.compare(password,userLogin.password)  //verify of hashed password