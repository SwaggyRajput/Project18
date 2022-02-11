import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import Navbar from './Navbar';
import Welcome  from './Welcome';
import SignUp from './SignUp';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Contact from './Contact';
import About from './About';

import Login from './Login'

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Navbar />
<Routes>
<Route exact path="/" element={<Welcome />} />
  <Route exact path="/register" element={<SignUp />} />
  <Route exact path="/login" element={<Login />} />
    <Route exact path="/aboutme" element={<About />} /> 
   <Route exact path="/contact" element={<Contact />} /> 
</Routes>
</BrowserRouter>
    </>
  )
}








export default App;