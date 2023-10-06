import React from 'react'
import {PRODUCTS} from "../../product";
import {Box} from "./Box";
import "./shop.css";

export  const Shop = () => {
  return (
    <div className="Shop">
        <div className="shopTitle">
      
            <h1>Spyder Shop P</h1>
        </div>
       
        <div className="products">
           { PRODUCTS.map((data)=>(
            
            <Box data ={data}/>
           ))}
            </div>  
          
    </div>
  )
}


