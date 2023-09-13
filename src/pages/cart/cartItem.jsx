import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const CartItem = ({data}) => {
  const {id, productName, price, productImage} = data;
  const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
  return (
    <div className='cart__item'>
      <img src={productImage} alt={productName} />
      <div className='cart__item__info'> 
        <p>{productName}</p>
        <p>${price}</p>
      </div>
      <div className='countHandler'>
        <button onClick={() => removeFromCart(id)}>-</button>
        <input value={cartItems[id]} onChange={e => updateCartItemCount(Number(e.target.value), id)}/>
        <button onClick={() => addToCart(id)}>+</button>
      </div>
    </div>
  )
}
