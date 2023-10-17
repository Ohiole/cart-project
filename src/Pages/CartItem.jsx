import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';

function CartItem(props) {
    const {id, itemName, price, itemImage} = props.data;
    const { cartItems, setCartItems } = useContext(ShopContext)

    const addToCart = (itemId) => {
      setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
      setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const updateInput = (newAmount, itemId) => {
      setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }

  return (
    <div className='cartItem'>
        <img src={itemImage} alt={itemName}/>
        <div className='description'>
            <p><b>{itemName}</b></p>
            <p>₦{price}</p>
            <div className='countHandler'>
              <button className='minus' onClick={() => removeFromCart(id)}>-</button>
              <input value={cartItems[id]} onChange={(e) => updateInput(e.target.value, id)}/>
              <button className='plus' onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem