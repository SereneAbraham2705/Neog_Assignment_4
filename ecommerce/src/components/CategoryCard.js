import React from 'react';
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CategoryContext } from '../contexts/CategoryContext';

function CategoryCard({item}) {
    const {_id,categoryName,description}=item;
return (
    <NavLink to="/explore" className="nav">
    <div className='catcard'>
    <h1>{categoryName}</h1>
    <h2>{description}</h2>
   
    </div>
    </NavLink>
   
  )
}

export default CategoryCard