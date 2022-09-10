import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import productosJSON from "../productos.json"

const ItemListContainer = (  ) => {

    const [productos, setProductos] = useState([]);
    const {categoryId} = useParams()
    
   /* useEffect(() => {
      fetch('./productos.json')
        .then (Resp => Resp.json())
        .then (datos => {
            setTimeout(() => {
            setProductos(datos)            
          }, 2000);
        })
       
    }, [])*/

    useEffect(()=>{
      getDatos(productosJSON, 2000)
      .then((datos)=>setProductos(datos))
      
 }, [])
  
 const getDatos = (datos, tiempo)=>{
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (datos){
              resolve(datos)                
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
            {categoryId===undefined?
            <ItemList productos = {productos} />
            :(<ItemList productos = {productos.filter(p=>p.categoria===categoryId) }/>)
            }
        </div>
      </>
    )
  }

  export default ItemListContainer