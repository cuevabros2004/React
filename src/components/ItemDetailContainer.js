import { useEffect, useState } from "react"
import productosJSON from "../productos.json"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () =>{
    const [prods, setProds] = useState([])
    const { Slug } = useParams()
    
   useEffect(()=>{
        getItem(productosJSON, 2000)
        .then((datos)=>setProds(datos))
        
   }, [])
    
   const getItem = (datos, tiempo)=>{
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

return <div>     
        <p className="font-bold text-xl mb-2 text-gray-600 decoration-solid py-2 bg-green-100">Detalle del Producto</p>
        <ItemDetail prods={prods.filter((p) => p.Slug === Slug)}/> 
    
</div>

}

export default ItemDetailContainer