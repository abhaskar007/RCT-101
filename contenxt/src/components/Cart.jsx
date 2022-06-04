import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext'

export const Cart = () => {
  const {addToCart} = useContext(CartContext)
  const {isAuthorized} = useContext(AuthContext);
  return (
    <div>Cart
     {isAuthorized && <button onClick={addToCart}>Add to Cart</button>  }
    </div>
    
  )
}
