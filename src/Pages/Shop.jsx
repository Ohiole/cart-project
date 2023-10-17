import React from 'react';
import { PRODUCTS } from '../Products';
import Product from './Product';
import './Shop.css'

function Shop() {
  return (
    <div className='shop'>
        <h1 className='shopTitle'>Ohiole's Cart Project</h1>
        <div className='shopList'>
            {PRODUCTS.map(productItem => (
                <Product data={productItem} key={productItem.itemName}/>
            ))}
        </div>
    </div>
  )
}

export default Shop