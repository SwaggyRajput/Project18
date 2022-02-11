import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Loginform from './Loginform';
import Navbar from './Navbar'
import {Link} from 'react-router-dom';
const Login=()=>{
  return(
    <>


<div className="card mb-3">
  <div className="row g-0 bord">
    <div className="col-md-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSajKZUpkARQplzHOYUdfCm_5NI7XYESSD9FQ&usqp=CAU" className="img-fluid rounded-start image" style={{paddingLeft:"60px",paddingBottom:"100px"}} alt="Image Not Found" />
      
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" style={{textAlign:"center"}}>Login</h5>
        <Loginform />
      </div>
    </div>
  </div>
</div>







    </>
  )
}








export default Login;