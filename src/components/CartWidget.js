import logo from '../logo.png';
import { FaShoppingCart } from "react-icons/fa";
import CartContext, { CartProvider } from './context/CartContext';
import { useContext, useState } from "react"

const CartWidget = () => {
    const {cantProdsCart} = useContext(CartContext)

    return (    
      <>
      {cantProdsCart>0?
        <div className='font-sans md:Oswald text-gray-600 flex'  ><FaShoppingCart className="ml-4"/>
          
          <p className="ml-2">{cantProdsCart}</p>

        </div>:
        <p></p>}
        </>
      )
  }
  export default CartWidget