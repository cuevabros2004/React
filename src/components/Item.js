import Carrito from "./Cart"
import {useState} from "react"
import { Link } from 'react-router-dom';

const Item = ({codigo, Slug, nombreProducto, precioPorPersona, urlImagen, limiteCantPersonas}) => {
    
    return (
                
        <div className="max-w-sm rounded overflow-hidden shadow-lg inline-block">
        
        <div className="px-6 py-1 ml-2">
            <div className="font-bold text-xl mb-2 text-gray-600">{nombreProducto}</div>
            <img className= "" src={urlImagen} alt = "imagen"/>
            <p className="text-gray-700 text-base">
               Precio Por Persona: $   {precioPorPersona}
            </p>
        </div>
       
        <div className="px-2 pt-2 pb-1 ">

            <Link to={'/Item/' + Slug}>
                <button className="bg-red-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 ml-3 rounded focus:outline-none focus:shadow-outline" type="button">
                    Ver Detalle
                </button>
            </Link>

        </div>
        </div>
        
    )
}

export default Item