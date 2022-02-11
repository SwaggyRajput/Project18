import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery'; 


const About=()=>{
//   function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function (e) {
//             $('#blah')
//                 .attr('src', e.target.result);
//         };

//         reader.readAsDataURL(input.files[0]);
//     }
// }
  return(
    <>
    
<div className='about'>
{/* <input type='file' onChange={readURL(this)} />
<img id="blah" src="http://placehold.it/180" alt="your image" />
 */}
{/* <img src='C:\Users\acer\OneDrive\Pictures\Screenshots\Screenshot (9).png' /> */}
<h3 style={{textAlign:"center"}}>Harsh Singh</h3>
<h5 style={{textAlign:"center"}}>Web Developer</h5>
<div  className='list1'>
<ul type="none">
<li>UserId<span className='list2'>vdwuvw</span></li>
<li>Name<span className='list2'>Harsh Singh</span></li>
<li>Emai<span className='list2'>wdvwvuvu</span>l</li>
<li>Phone<span className='list2'>hwvctw</span></li>
<li>Profession<span className='list2'>Web developer</span></li>
</ul>
</div>





</div>








 





    </>
  )
}








export default About;