import { useContext } from "react"
import CartContext from "./context/CartContext"
import { getFirestore } from "firebase/firestore"
import { doc, getDoc, updateDoc, collection, addDoc} from "firebase/firestore" 
import Swal from 'sweetalert2'

const Orden = () =>{
    const {prodsCart} = useContext(CartContext)
    const {totalizar} = useContext(CartContext)
    const {actualizarStockBD} = useContext(CartContext)
    const {clearCart} = useContext(CartContext)

    const nrocomprobante = Math.floor(Math.random()*999999);
    const totalCompra = totalizar()

    const db = getFirestore();

    const onSubmit = (ev) =>{
        ev.preventDefault()

        const nombre = ev.target.nombre.value
        const telefono = ev.target.telefono.value
        const email = ev.target.email.value
        
        var f = new Date();
        const fecha = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();

        let  arr, carrito;
        
        prodsCart.forEach( c => {
            arr = [{id: c.Slug, name: c.nombreProducto, categoria: c.categoria, price: c.precioPorPersona, quantity: c.cantProd, totalprice: c.precioPorPersona * c.cantidad}]
   
            if (carrito)
                carrito = carrito.concat(arr)
            else 
                carrito = arr
    
 
            const datoItem = doc(db, "items", (c.Slug));
            getDoc(datoItem).then((snapshot) => {
              if(snapshot.exists()){
                const stockProd = doc(db, "items", (c.Slug));
                updateDoc(stockProd, {stock: prodsCart.find(p => p.codigo === c.codigo).stock - prodsCart.find(p => p.codigo === c.codigo).cantProd})
              }
           } )
        })

           const order = {
            buyer: { name: nombre, phone: telefono, email: email},
            items: {carrito, fecha, totalCompra}
            }

            if(prodsCart.length > 0){
                const orderCollection = collection(db, 'ordenes')
                addDoc(orderCollection, order).then(({ codigo }) => console.log(codigo));
           
                clearCart();
                ev.target.nombre.value = ""
                ev.target.telefono.value = ""
                ev.target.email.value = ""

           
                Swal.fire(
                 'Felicitaciones!',
                 'La compra se realiz?? con ??xito, su n??mero de comprobante es: ' + nrocomprobante,
                 'info'
               );
           
                }

 
    }


    return(
        <div className="flex flex-center">
        <div className="mt-4 mb-4 ml-10">
        <form onSubmit={onSubmit} className="w-full max-w-lg ml-40">
 
            <div className="flex flex-center -mx-3 mb-2 ">

                <div className="w-full  px-3 mb-6 md:mb-0 inline-block  drop-shadow-xl">
                    <p className = "text-green-700 bg-green-200 mb-4 text-lg">Datos Personales</p>
                    <label className="  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Nombre y Apellido
                    </label>
                    <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Ingrese su nombre y apellido" name="nombre"/>                
                    
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Tel??fono
                    </label>
                    <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Ingrese su Tel??fono" name="telefono"/>                
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full   px-3 mb-6 md:mb-0">
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
    <div className="mt-4 mb-3 ml-60 border-1 drop-shadow-xl ">
    
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
                <td className="pl-17">{p.cantProd}</td>
                <td className="pl-17">$ {p.precioPorPersona * p.cantidad}</td>
              </tr>
             )}
             
            </tbody>
          </table>
        </div>
        <div className="mt-2 mb-1 border-1 drop-shadow-xl bg-green-200 ">
           
            <table className="table-auto ">
            <thead>
              <tr>
                <th className="pr-4 pl-4"></th>
                <th className="pr-4"></th>                
              </tr>
            </thead>
            <tbody>              
              <tr className="divide-y divide-solid ">
                <td className="pl-2 pr-4">Monto Total Compra:</td>
                <td className="pl-0">$ {totalCompra}</td>
              </tr>
                           
            </tbody>
          </table>
        </div>
    </div>
    </div>
    )
}

export default Orden