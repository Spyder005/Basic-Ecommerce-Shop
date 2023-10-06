import React, { useContext } from 'react'
import { PRODUCTS } from '../../product'
import { ShopContext } from '../../context/shop-context'
//import { navigate } from '@reach/router';
import { useNavigate } from "react-router-dom";
import { CartBox } from "./cart-box";
import "./cart.css";

export  const Cart = () => {
    const {cartItems,getTotalCartAmount,checkout }=useContext(ShopContext);
    const totalAmount =getTotalCartAmount();
    const navigate =useNavigate();
     
  return (
    <div className="cart">
        <h1>Cart Items</h1>
        <div className="cart">
           
          
        {PRODUCTS.map((item) => {
            console.log(cartItems)
          if (cartItems[item.id] !== 0) {
            
              return <CartBox data={item} />;
        }
        
    })}
 </div>
 {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
      
 


