import React from 'react';
import { useContext } from "react";
import { NavLink } from "react-router-dom";

function CakeCard({item}) {
    const {_id,title,price,categoryName,rating}=item;
    return (
        <div key={_id} className="menuItem">
        <h2>{title}</h2>
        {/* <img src={image} alt="any"/> */}
        <p>Price : Rs {price}</p>
        <p>Rating : {rating}</p>
        <button>Add to cart</button>
        </div>
        
       
      )
}

export default CakeCard