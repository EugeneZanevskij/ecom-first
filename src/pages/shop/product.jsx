import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

export const Product = ({id, productName, price, productImage}) => {
  const {cartItems, addToCart, removeFromCart} = useContext(ShopContext);
  const itemCount = cartItems[id];
  return (
    <div className='product'>
      <img src={productImage} alt={productName} />
      <div className='product__info'>
        <p>{productName}</p>
        <p>${price}</p>
      </div>
      <button className='product__button' onClick={() => addToCart(id)}>
        ADD TO CART {itemCount > 0 && <>({itemCount})</>}
      </button>
    </div>
  )
}
