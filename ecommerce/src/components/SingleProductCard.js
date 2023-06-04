import React from 'react';

function SingleProductCard({item}) {
    const {_id,title,price,rating}=item;
  return (
    <div key={_id}>
    <h2>{title}</h2>
    {/* <img src={image} alt="any"/> */}
    <p>Price : Rs {price}</p>
    <p>Rating : {rating}</p>
    <button>Add to cart</button>
    </div>
  )

}

export default SingleProductCard