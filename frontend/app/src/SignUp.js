import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Signupform from './Signupform';
import Navbar from './Navbar';

const SignUp=()=>{
  return(
    <>
 












<div className="card mb-3">
  <div className="row g-0 bord">
    <div className="col-md-4">
      <img src="https://thumbs.dreamstime.com/b/new-user-online-registration-sign-up-concept-tiny-characters-signing-login-to-account-huge-smartphone-secure-password-220139164.jpg" className="img-fluid rounded-start image" alt="Image Not Found" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" style={{textAlign:"center"}}>SignUp</h5>
        <Signupform />
      </div>
    </div>
  </div>
</div>







    </>
  )
}








export default SignUp;