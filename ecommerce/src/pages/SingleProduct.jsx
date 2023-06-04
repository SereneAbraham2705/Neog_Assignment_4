import React from 'react';
import { useContext } from "react";
import { useParams } from "react-router-dom";
import SingleProductCard from "../components/SingleProductCard";
import { CakeContext } from '../contexts/CakeContext';

function SingleProduct() {
    const { ProductId } = useParams();
    const {products} =useContext(CakeContext);
    // console.log(products); 
    // console.log(ProductId);
    // const product = products.find((item) => item._id === ProductId);
    // console.log(product); 
    const product = products.find((item) => item._id === ProductId);

    if (!product) {
      
      return <p>Product not found.</p>;
    }
    return (
        // <div>
        //   <SingleProductCard
        //     item={products.find((item) => item._id === ProductId)}
        //   />
        // </div>
        <div>
            <SingleProductCard item={product}/>
        </div>
      )
}

export default SingleProduct