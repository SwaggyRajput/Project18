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


 


const Signupform=()=>{
  const navigate=useNavigate();
     const [User,setUser]=useState({
      name:"",email:"",phone:"",profession:"",password:"",cpassword:""
      });
      let name,value;
     const handleinput=(event)=>{
       name=event.target.name;
       value=event.target.value;
      setUser({...User,[name]:value})
     }
     
   const postData=async(e)=>{
     
   
e.preventDefault();

const {name,email,phone,profession,password,cpassword} = User;
const res=await fetch("http://localhost:6001",{
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

// navigate("/login");
}


   

   
  return(
    <>
       



 <form method='post' action='http://localhost:6001'>
   <ul type="none">
       <li><PersonIcon /><input className='list' type='text' placeholder='Your Name' name="name" value={User.name} onChange={handleinput} /></li>

       <hr/>  
     
       <li><MailIcon /><input className='list' type='email' placeholder='Your Email' name='email' value={User.email} onChange={handleinput} /></li><hr />
       <li><PhoneIcon  /><input className='list' type="text" placeholder='Your Number' name='phone' value={User.phone} onChange={handleinput} /></li><hr />
       <li><WorkIcon /><input className='list' type='text' placeholder='Your Profession' name='profession' value={User.profession} onChange={handleinput} /></li><hr />
       <li><LockOpenIcon /><input className='list' type='password' placeholder='Password' name='password' value={User.password} onChange={handleinput} /></li><hr />
       <li><LockIcon /><input className='list' type='password' placeholder='Confirm Your Password' name='cpassword' value={User.cpassword} onChange={handleinput} /></li><hr />
       <button type='submit' className='register' onClick={postData}>Register</button>   
       
   </ul>

</form>





    </>
  )
}








export default Signupform;