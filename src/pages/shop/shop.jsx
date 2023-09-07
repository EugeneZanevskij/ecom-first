import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './product';
import './shop.css';

export const Shop = () => {
  return (
    <div className='shop'>
      <div className='shop__title'>
        <h1>Shop</h1>
      </div>
      <div className='shop__items'>
        {PRODUCTS.map((product) => (
          <Product id={product.id} productName={product.productName} price={product.price} productImage={product.productImage}/>
        ))}
      </div>
    </div>
  )
}
