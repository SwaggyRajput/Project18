import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
import WorkIcon from '@material-ui/icons/Work';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Login from "./Login";



 


const Signupform=()=>{
  const navigate=useNavigate();
     const [user,setUser]=useState({
      name:"",email:"",phone:"",profession:"",password:"",cpassword:""
      });
      let name,value;
     const handleinput=(event)=>{
       name=event.target.name;
       value=event.target.value;
      setUser({...user,[name]:value})
     }
     
   const postData=async(e)=>{
     
   
e.preventDefault();

const {name,email,phone,profession,password,cpassword} = user;
const res=await fetch("/register",{
  method:"post",
  headers:{
    "Accept":"application/json",
  "Content-type":"application/json"
  },
 
  body:JSON.stringify({
    name,email,phone,profession,password,cpassword
  })
})
const data = await res.json();
console.log(data)
if(!data)
{
  alert("invalid registration");
  console.log("Invalid registration")
}else{
  alert("Successfylly Registered")
  console.log("Successfylly Registered")
  navigate("/login");
}


   }

   
  return(
    <>
       



 <form method='post'>
   <ul type="none">
       <li><PersonIcon /><input className='list' type='text' placeholder='Your Name' name="name" value={user.name} onChange={handleinput} /></li>

       <hr/>  
     
       <li><MailIcon /><input className='list' type='email' placeholder='Your Email' name='email' value={user.email} onChange={handleinput} /></li><hr />
       <li><PhoneIcon  /><input className='list' type="text" placeholder='Your Number' name='phone' value={user.phone} onChange={handleinput} /></li><hr />
       <li><WorkIcon /><input className='list' type='text' placeholder='Your Profession' name='profession' value={user.profession} onChange={handleinput} /></li><hr />
       <li><LockOpenIcon /><input className='list' type='password' placeholder='Password' name='password' value={user.password} onChange={handleinput} /></li><hr />
       <li><LockIcon /><input className='list' type='password' placeholder='Confirm Your Password' name='cpassword' value={user.cpassword} onChange={handleinput} /></li><hr />
       <button type='submit' className='register' onClick={postData}>Register</button>   
       
   </ul>

</form>





    </>
  )
}








export default Signupform;