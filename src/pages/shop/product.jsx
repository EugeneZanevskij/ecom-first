import React from 'react'

export const Product = ({id, productName, price, productImage}) => {
  return (
    <div className='product'>
      <img src={productImage} alt={productName} />
      <div className='product__info'>
        <p>{productName}</p>
        <p>${price}</p>
      </div>
      <button className='product__button'>ADD TO CART</button>
    </div>
  )
}
