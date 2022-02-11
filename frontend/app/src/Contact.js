import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Contact=()=>{
  return(
    <>
<div className='same'>
<PhoneIphoneIcon className='phone' />
<h5 className='head'>Phone</h5>
<h6 className='helo'>7704818742</h6>
</div>
<div className='same'>
<EmailIcon className='email'/>
<h5 className='head'>Email</h5>
<h6 className='helo'>harshsingh2131708@gmail.com</h6>
</div>
<div className='same'>
<HomeIcon className='home' />
<h5 className='head'>Address</h5>
<h6 className='helo'>Raipur,Ghazipur</h6>
</div>


<div className='contactus'>

<h3 style={{marginLeft:"50px"}}>Get in Touch</h3>
<input className='data' type="text" placeholder='Your name' />
<input className='data' type="email" placeholder='Your email' />
<input className='data' type="text" placeholder='Your phone number' />
<textarea class="textar" rows="3" cols="100"></textarea>
<div class="col-auto">
    <button type="submit" class="btn btn-primary sub">Send Message</button>
  </div>



</div>







   </>
  )
}

export default Contact;