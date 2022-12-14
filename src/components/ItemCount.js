import { useState } from "react"


const ItemCount = ({onAdd, Initial, limiteCantP}) =>{
    const [cantPersonas, setCantPersonas] = useState(Number(Initial))
    const [cantidadProducto, setCantidadProducto] = useState(1)

    const restar = () =>{
        if (cantPersonas > 1)
            setCantPersonas(cantPersonas-1)
      }

    const sumar = () =>{
       if (cantPersonas < limiteCantP )
        setCantPersonas(cantPersonas+1)
      }

      return (
                
        <div className="max-w-sm rounded overflow-hidden shadow-lg inline-block">
        
        <div className="px-2 pt-2 pb-1 ">

            <p className="text-gray-700 text-base my-0">Cantidad de Personas:</p>

            <button onClick={restar} className="bg-red-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
                -
            </button>
            
            <p className="inline-block pt-2 px-1">
                { cantPersonas }
            </p>

            <button  onClick={sumar} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
                +
            </button>
        </div>

        <div className="px-6 pt-4 pb-2">
            <button  className="btn btn-outline" type="button" onClick = {(() => onAdd(cantidadProducto, cantPersonas))} >
                Agregar
            </button>

        </div>
        </div>
        
    )
}

export default ItemCount