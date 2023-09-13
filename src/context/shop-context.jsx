import React, {createContext, useState} from 'react'
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i=1; i<=PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
}
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const getTotalCartAmount = () => {
    let total = 0;
    for (let id in cartItems) {
      if (cartItems[id] > 0) {
        let itemInfo = PRODUCTS.find(product => product.id === Number(id));
      total += cartItems[id]*itemInfo.price;
      }
    }
    return total;
  }
  const addToCart = (id) => {
    setCartItems((cartItems) => ({...cartItems, [id]: cartItems[id] + 1}));
  }
  const removeFromCart = (id) => {
    setCartItems((cartItems) => ({...cartItems, [id]: cartItems[id] - 1}));
  }

  const updateCartItemCount = (newAmount, id) => {
    setCartItems((prev) => ({...prev, [id]: newAmount}));
  }

  const contextValue = {
    cartItems,
    getTotalCartAmount,
    addToCart,
    removeFromCart,
    updateCartItemCount
  }
  console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
