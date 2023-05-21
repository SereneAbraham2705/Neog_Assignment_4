import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Footer.css';


function Footer() {
  return (
    <div className='footer'>
       <div className='socilamedia'>
       <h2>Follow us</h2>
       <a className="alinks" href="/">Instagram</a>
       <a className="alinks" href="/">Twitter</a>
       <a className="alinks" href="/">Facebook</a>
       </div>
       <h2>Contact us : 9491610548</h2>
       <p>&copy; 2023 sweetcakes.com</p>
       
    </div>
  )
}

export default Footer