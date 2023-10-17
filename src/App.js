import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import { PRODUCTS } from './Products';
import { useState } from 'react';
import { ShopContext } from './Context/ShopContext';


const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0
  }
  return cart;
}


function App() {

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const contextValues = {cartItems, setCartItems}
  console.log(cartItems);

  return (
    <div className="App">
      <ShopContext.Provider value={contextValues}>
        <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Shop />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
        </Router>
      </ShopContext.Provider>
    </div>
  );
}

export default App;
