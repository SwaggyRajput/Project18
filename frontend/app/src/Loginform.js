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
import {Link,to} from 'react-router-dom';


const Loginform=()=>{
  return(
    <>
 
   <ul type="none">
       <li><PersonIcon /><input className='list' type='text' placeholder='Your Name' name='name' style={{textDecoration:"none"}}/></li>

       <hr/>  
     
       
       <li><LockOpenIcon /><input className='list' type='password' placeholder='Password' name='password' style={{textDecoration:"none"}} /></li><hr />
       <li><LockIcon /><input className='list' type='password' placeholder='Confirm Your Password' name='cpassword' style={{textDecoration:"none"}}/></li><hr />
       <button type='submit' className='register' style={{textDecoration:"none"}}>Login</button>
   </ul>
    <h6 style={{paddingLeft:"30px"}}>Dont have account,click on <Link to='/register' style={{textDecoration:"none"}}>Register</Link> </h6>







    </>
  )
}








export default Loginform;