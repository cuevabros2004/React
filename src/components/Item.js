import Carrito from "./Carrito"
import {useState} from "react"

const Item = ({codigo, nombreProducto, precioPorPersona, urlImagen, limiteCantPersonas}) => {
    
    const [contador, setContador] = useState(0)

    const restar = () =>{
        if (contador > 0)
            setContador(contador-1)
      }

    const sumar = () =>{
       if (contador < limiteCantPersonas )
            setContador(contador+1)
    
      }

    return (
                
        <div className="max-w-sm rounded overflow-hidden shadow-lg inline-block">
        
        <div className="px-6 py-1 ml-2">
            <div className="font-bold text-xl mb-2">{nombreProducto}</div>
            <img className= "" src={urlImagen}/>
            <p className="text-gray-700 text-base">
               Precio Por Persona: $   {precioPorPersona}
            </p>
        </div>
       
        <div className="px-2 pt-2 pb-1 ">

            <p className="text-gray-700 text-base my-0">Cantidad de Personas:</p>

            <button onClick={restar} className="bg-red-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
                -
            </button>
            
            <p className="inline-block pt-2 px-1">
                { contador }
            </p>

            <button  onClick={sumar} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
                +
            </button>
        </div>

        <div className="px-6 pt-4 pb-2">
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Agregar
            </button>
        </div>
        </div>
        
    )
}

export default Item