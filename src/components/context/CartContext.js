import { useState } from "react";
import React from "react";

const CartContext = React.createContext([]);

export default CartContext

const CartProvider = ({defaultValue=[], children})=>{

    const [prodsCart, setProdsCart] = useState(defaultValue)
        
    const addItem = ( item, quantity ) =>{
        if (isInCart(item[0].codigo)){
            item[0].stock =  item[0].stock - 1
            item[0].cantProd = item[0].cantProd + 1
            item[0].cantidad = quantity

            setProdsCart( item )
        }else{            
            item[0].stock =  item[0].stock - 1
            item[0].cantProd = 1
            item[0].cantidad = quantity
            console.log(quantity)
            setProdsCart( prevState => prevState.concat( item ) )
        }
            
    }
    
    const removeItem = (id) =>{
        setProdsCart(prodsCart.filter(p=>p.codigo!==id))
        prodsCart[0].stock =  prodsCart[0].stock + 1
    }

    const clearCart = () =>{
        setProdsCart([])

        prodsCart.forEach(p=>p.stock = p.stock + 1)
    }

    function isInCart (id) {
       return prodsCart.find(p=>p.codigo===id)
    }

    function totalizar () {
        if (prodsCart.length>0){
            return prodsCart.reduce((acumulador, prodsCart) => acumulador + prodsCart.precioPorPersona * prodsCart.cantidad, 0)
        }
     }

    return (
    <CartContext.Provider value={{prodsCart, addItem, clearCart, removeItem, totalizar}}>
        {children}
    </CartContext.Provider>
    )
}

export  {CartProvider};