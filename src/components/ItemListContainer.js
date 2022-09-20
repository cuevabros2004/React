import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import productosJSON from "../productos.json"
import Spinner from "./Spinner";
import CartContext from "./context/CartContext";
import { useContext } from "react";

const ItemListContainer = (  ) => {

    const [productos, setProductos] = useState([]);
    const {categoryId} = useParams()
    const [loading, setLoading] = useState(true)
    
     useEffect(()=>{
        getDatos(productosJSON, 3000)
       .then((datos)=>setProductos(datos))     
 }, [])
 
 const getDatos = (datos, tiempo)=>{
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (datos){
              resolve(datos)     
              setLoading(false)           
          }
          else{
              reject("error")                
          }
          
      }, tiempo);
  })
  
 }

    return (
      <>
        <div className="divCentral">     
        {loading?
          <div className="mb-5 mt-5">
            <Spinner/>
          </div>
          :       
          <div> 
            {categoryId===undefined?
            <ItemList productos = {productos} />
            :(<ItemList productos = {productos.filter(p=>p.categoria===categoryId) }/>)
            }
          </div>
          }
        </div>
      
      </>
    )
  }

  export default ItemListContainer