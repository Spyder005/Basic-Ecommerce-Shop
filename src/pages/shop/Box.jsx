import React from 'react'
import { ShopContext } from '../../context/shop-context';
import { useContext } from 'react';


export const Box = (props) => {
    
    const {id,productName,price,productImage}=props.data;
    const {addToCart,cartItems} =useContext(ShopContext);
    const cartItemsAmount = cartItems[id];
     
    return  <div className="box">
           <img src={productImage}/>
           <div className="description">
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <button className="addToCartBttn" onClick={()=>addToCart(id)}>Add to Cart {cartItemsAmount>0 && `(${cartItemsAmount})`}</button>
           </div>
    </div>
  
}


