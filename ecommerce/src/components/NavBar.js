import React from 'react';
import '../styles/NavBar.css';
import Logo from "../images/logo.jpg";
import { NavLink } from 'react-router-dom';


function NavBar() {
  return (
    <div className="navbar">
        <div className="leftnav">
            <img src={Logo} alt="Some image"/>
        </div>
        <div><input  className='inputdiv' type="text" placeholder='Start exploring'></input></div>
        <div className="rightnav">
            <nav>
                <NavLink className="nav_style"to="/">Home</NavLink>
                <NavLink className="nav_style"to="/explore">Explore</NavLink>
                <NavLink className="nav_style"to="/wishlist">WishList</NavLink>
                <NavLink className="nav_style"to="/cart">Cart</NavLink>
                <NavLink className="nav_style"to="/profile">Profile</NavLink>
            </nav>
        </div>
    </div>
  )
}

export default NavBar