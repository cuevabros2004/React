import { Button } from "bootstrap"
import { useState } from "react"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"

const ItemDetail = ({prods}) =>{

    const [quantityToAdd, setQuantyToAdd] = useState(1)
    const [cantPersonasToAdd, setCantPersonasToAdd] = useState(1)
    const [stock, setStock] = useState(1)

    function onAdd(cantProducto, cantPersonas) {
        setQuantyToAdd(cantProducto)
        setCantPersonasToAdd(cantPersonas)
        setStock(stock-cantProducto)
    }
     
    return (
         
           <div  className=" bg-base-100 shadow-xl px-6 py-6 my-15">
   
           { 
           prods.map(p =>
            <div  key={p.codigo} className="max-w-sm rounded overflow-hidden shadow-lg inline-block ">
        
            <div className="px-6 py-1 ml-2 ">
                <div className="font-bold text-xl mb-2 text-gray-600">{p.nombreProducto}</div>
                <img className= "" src={p.imagen} alt="producto"/>
                <p className="text-gray-700 text-base">
                    Stock disponible: {p.stock}
                </p>
                <p className="text-gray-700 text-base">
                   Precio Por Persona: $   {p.precioPorPersona}
                </p>
                <p className="text-gray-700 text-base">
                    Descripcion: {p.descripcion}                    
                </p>
            </div>
            {stock > 0 ?
            <ItemCount onAdd={onAdd}  limiteCantP={p.limiteCantPersonas} />
            :
            <div>
                <Link to="/Cart"><button className="mb-3 ml-3 bg-red-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" type="button">Finalizar Compra</button></Link> 
                <Link to="/"><button className="mt-3 mb-3 ml-3 bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" type="button">Seguir Comprando</button></Link>
            </div>
            }
            </div>
             
           )
            }
         </div>
        
       )
    
}

export default ItemDetail