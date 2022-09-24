import { useState } from "react";
import React from "react";
import { doc, getFirestore, updateDoc } from "firebase/firestore";

const CartContext = React.createContext([]);

export default CartContext

const CartProvider = ({defaultValue=[], children})=>{

const [prodsCart, setProdsCart] = useState(defaultValue)
const [cantProdsCart, setCantProdsCart] = useState(0)
const db = getFirestore();  
    
    const addItem = ( item, quantityToAdd, cantPersonasToAdd ) =>{
        if (isInCart(item[0].codigo)){
            item[0].stock =  item[0].stock - quantityToAdd
            item[0].cantProd = item[0].cantProd + quantityToAdd
            item[0].cantidad = cantPersonasToAdd

            setProdsCart( item )

        }else{      
    
            item[0].stock =  item[0].stock - quantityToAdd
            item[0].cantProd = quantityToAdd
            item[0].cantidad = cantPersonasToAdd
            
            setProdsCart( prevState => prevState.concat( item ) )
        }
        
        //const stockProd = doc(db, "items", (item[0].Slug))
        //updateDoc(stockProd, {stock: item[0].stock })
        actualizarStockBD(item[0].codigo, item, "agregar")
    }
    
    const removeItem = (prodsCart,  id) =>{   
        setProdsCart(prodsCart.filter(p=>p.codigo!==id))
        cantidadProdsInCart("remove", -prodsCart[0].cantProd)  
        prodsCart.find(p => p.codigo === id).stock = prodsCart.find(p => p.codigo === id).stock +  prodsCart.find(p => p.codigo === id).cantProd 

        actualizarStockBD(id, prodsCart, "eliminar")
 
       }

       

     
    const clearCart = () =>{

        prodsCart.forEach(p=>p.stock = p.stock + 1)
        
        cantidadProdsInCart("removeAll", 0)
      
        prodsCart.forEach(p=> actualizarStockBD(p.codigo, prodsCart, "eliminar"))
        
        setProdsCart([])
    }

    function isInCart (id) {
       return prodsCart.find(p=>p.codigo===id)
    }

    function totalizar () {
        if (prodsCart.length>0){
            return prodsCart.reduce((acumulador, prodsCart) => acumulador + prodsCart.precioPorPersona * prodsCart.cantidad, 0)
        }
     }

     function cantidadProdsInCart(operacion, cantProds){
 
        const totalProds = (operacion==="removeAll")?
                            0:
                            prodsCart.reduce((acumulador, prodsCart) => acumulador + Math.abs(cantProds), cantProds)
        setCantProdsCart(totalProds)
     }

     const actualizarStockBD = (id, item, accion) =>{

        if (accion==="eliminar"){
            const stockProd = doc(db, "items", (prodsCart.find(p => p.codigo === id).Slug))
            updateDoc(stockProd, {stock: prodsCart.find(p => p.codigo === id).stock})
        }else{
            const stockProd = doc(db, "items", (item[0].Slug))
            updateDoc(stockProd, {stock: item[0].stock })
        }
     }


    return (
    <CartContext.Provider value={{prodsCart, addItem, clearCart, removeItem, totalizar, cantProdsCart, cantidadProdsInCart, isInCart}}>
        {children}
    </CartContext.Provider>
    )
}

export  {CartProvider};