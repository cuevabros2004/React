import { useContext } from "react"
import CartContext from "./context/CartContext"
import { getFirestore } from "firebase/firestore"


const Orden = () =>{
    const {prodsCart} = useContext(CartContext)
    const {totalizar} = useContext(CartContext)
    const {actualizarStockBD} = useContext(CartContext)

    const totalCompra = totalizar()
    
    const nrocomprobante = Math.floor(Math.random()*999999);

    const db = getFirestore();

    const onSubmit = (ev) =>{
        ev.preventDefault()

        const nombre = ev.target.nombre.value
        const telefono = ev.target.telefono.value
        const email = ev.target.email.value
 
    }


    return(
        <div className="flex flex-center">
        <div className="mt-4 mb-4 ml-80">
        <form onSubmit={onSubmit} className="w-full max-w-lg ml-40">
 
            <div className="flex flex-center -mx-3 mb-2 ">

                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 inline-block  drop-shadow-xl">
                    <p className = "text-green-700 bg-green-200 mb-4 text-lg">Datos Personales</p>
                    <label className="  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Nombre y Apellido
                    </label>
                    <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Ingrese su nombre y apellido" name="nombre"/>                
                    
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Teléfono
                    </label>
                    <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Ingrese su Teléfono" name="telefono"/>                
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                     Email
                </label>
                <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Ingrese su Email" name="email"/>                

                <button className="btn btn-outline" type="submit">
                    ENVIAR
                </button>
            </div>  
        </div>       

        </form>
    </div>
    <div className="mt-4 mb-3  border-1 drop-shadow-xl ">
    
        <p className = "bg-green-200 text-green-700 mb-4 text-lg">Productos Seleccionados</p>

        <div className="mt-2 mb-1">
           
            <table className="table-auto">
            <thead>
              <tr>
                <th className="pr-4 pl-4">Producto</th>
                <th className="pr-4">Cantidad</th>
                <th className="pr-4">Importe</th>
              </tr>
            </thead>
            <tbody>
              {prodsCart.map(p=>
              <tr key={p.codigo} className="divide-y divide-solid ">
                <td className="pl-2 pr-4">{p.nombreProducto}</td>
                <td className="pl-2 pr-4">{p.cantProd}</td>
                <td className="pl-2 pr-4">$ {p.precioPorPersona * p.cantidad}</td>
              </tr>
             )}
             
            </tbody>
          </table>
          <div className="flex ml-3 mt-2 drop-shadow-xl bg-gray-100">
            <h1 className="pr-10"> Total de la Compra:</h1> 
            <p className="ml-20">$ {totalCompra}</p>
          </div>
        </div>
    </div>
    </div>
    )
}

export default Orden