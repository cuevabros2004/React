import { clear } from "@testing-library/user-event/dist/clear"
import { useContext } from "react"
import CartContext from "./context/CartContext"
import { Link } from "react-router-dom"


const Cart = () => {
    const {prodsCart} = useContext(CartContext)
    const {removeItem} = useContext(CartContext)
    const {clearCart} = useContext(CartContext)
    const {totalizar} = useContext(CartContext)


    const total = totalizar()
        
      return (
        <>
        <div  className="bg-green-200">Carrito de Compras</div>
        {Object.entries(prodsCart).length>0?
        <div>
        <div className="">
            {prodsCart.map(p=><div key={p.codigo} className="flex justify-center mt-2 mb-2">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img className=" w-full h-30 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={p.imagen} alt="Imagen Producto" />
                <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{p.nombreProducto}</h5>
                    <div className="text-gray-700 text-base mb-4">
                        <h4>Cantidad:  {p.cantProd}</h4> 
                        <h4>Precio por Persona: $ {p.precioPorPersona}</h4>
                        <h4>Cantidad de Personas: {p.cantidad} </h4>
                        <h4>Importe Total: $ {p.cantidad * p.precioPorPersona} </h4>
                    </div>       
                <button className="mt-3 mb-3 ml-3 bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={(() => removeItem(p.codigo))} type="button">QUITAR</button>
                </div>              
            </div>   
        </div>     
        ) //Fin map
        } 
        </div> 
                <div className="bg-green-50 font-light text-xl pb-2 decoration-8">
            <p className="">Monto Total Compra: $ {total} </p>
            <button className="mt-3 mb-3 ml-1 bg-red-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline " onClick={(()=>clearCart())} >Vaciar Carrito</button>                 
        </div>
        </div>:
        <div className= "border-3 border-solid border-slate text-2xl bg-slate-100 h-40 pt-4 decoration-solid">
            <p className="">Carrito de Compras Vacio</p>
            <Link to="/"><button className="mt-3 mb-3 ml-3 bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" type="button">Seguir Comprando</button></Link>               
             
        </div>}                  

    </>
    )
}

export default Cart