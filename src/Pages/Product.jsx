import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';

function Product(props) {
    const {id, itemName, price, itemImage} = props.data;
    const { setCartItems, cartItems } = useContext(ShopContext);

  const addToCart = (itemId) => {
      setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  }

  const cartItemAmount = cartItems[id];

  return (
    <div className='product'>
        <img src={itemImage} alt={itemName}/>
        <div className='description'>
            <p className='name'>{itemName}</p>
            <p className='price'>₦{price}</p>
        </div>
        <button className='cartBtn' onClick={() => addToCart(id)}>
          Add to cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
        </button>
    </div>
  )
}

export default Product