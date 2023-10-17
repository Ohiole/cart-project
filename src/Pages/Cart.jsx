import React, { useContext } from 'react'
import { PRODUCTS } from '../Products'
import { ShopContext } from '../Context/ShopContext'
import CartItem from './CartItem';
import './cart.css'
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems } = useContext(ShopContext);
  const navigate = useNavigate()

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
        totalAmount += cartItems[item] * itemInfo.price
      }
    }
    return totalAmount
  }

  const totalAmount = getTotalAmount();

  return (
    <div className='cart'>
      <h1>Ohis Cart Projects</h1>
      <h1>Your Cart Items</h1>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0){
            return <CartItem data={product} key={product.id}/>
          }
        })}
      </div>
      {totalAmount > 0 ? 
        <div className='checkout'>
          <p>Total Amount: ₦{totalAmount}</p>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
        </div>: 
        <p>Cart is Empty</p>
        }
      
    </div>
  )
}

export default Cart