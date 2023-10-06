import React from 'react'
import { createContext ,useState ,useEffect} from 'react'
import { PRODUCTS } from "../product";
export const ShopContext =createContext(null)
const getDefaultCart=()=>{
       let cart ={};
         for(let i=1;i<PRODUCTS.length+1;i++){
            cart[i]=0;
         }
         return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems,setcartItems] =useState(getDefaultCart());
    const addToCart =(id)=>{
        setcartItems((prev)=>({...prev ,[id]:prev[id]+1}));
    };
    const removeFromCart =(id)=>{
        setcartItems((prev)=>({...prev ,[id]:prev[id]-1}));
    };
    const updateCartItemCount=(newAmount,id)=>{
        setcartItems((prev)=>({...prev,[id]:newAmount}));
    };
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
            totalAmount += cartItems[item] * itemInfo.price;
          }
        }
        return totalAmount;
      };
    
    const checkout=()=>{
        setcartItems(getDefaultCart());
    };
    // const shop=()=>{
    //     return <link to="/"/>;
    // }
   
    const contextValue = {
        cartItems,
        addToCart,
        updateCartItemCount,
        removeFromCart,
       getTotalCartAmount,
       checkout,
       
      };
  return (
    <div>
      <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
    </div>
  )
  }

