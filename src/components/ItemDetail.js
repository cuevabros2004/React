import { Button } from "bootstrap"
import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import { Link, useParams } from "react-router-dom"
import CartContext from './context/CartContext';
import {doc, getDoc, getFirestore} from "firebase/firestore"
import { useEffect } from "react";
import Spinner from "./Spinner";

const ItemDetail = ({prods}) =>{

    const [quantityToAdd, setQuantyToAdd] = useState(1)
    const [cantPersonasToAdd, setCantPersonasToAdd] = useState(1)
    const {addItem} = useContext(CartContext)
    const {cantidadProdsInCart} = useContext(CartContext)
    const {isInCart} = useContext(CartContext)
    const {prodsCart} = useContext(CartContext)

    const { Slug } = useParams()
    const [prod, setProd] = useState([])   
    const [loading, setLoading] = useState(true)
    const [stockProdSelect, setStockProdSelect] = useState(1)

     useEffect(() => {
      const db = getFirestore();
 
      const producto = doc(db, "items", Slug)
      getDoc(producto).then((snapshot) => {
        if (snapshot.exists()){
            setTimeout(() => {
                setProd({id: snapshot.slug, ...snapshot.data()});   
            }, 1000);
            
            setLoading(false)              
        }
      });
      }, []);
    
    
    function onAdd(quantityToAdd, cantPersonasToAdd) {
        addItem(prods, quantityToAdd, cantPersonasToAdd) 
        cantidadProdsInCart("add", quantityToAdd)
    }   

    function existsProdInCart (Slug){    
       return prodsCart.find(p=>p.Slug===Slug)       
    }

    function getStockProd(){
        if (existsProdInCart (Slug)){
            return prodsCart.find(p=>p.Slug===Slug).stock
        }else
            return prod.stock
        {

        }
    }

    return (
        <>
           {loading ? 
                   
            <div>   <Spinner/></div>:
           <div  className=" bg-base-100 shadow-xl px-6 py-6 my-15">
  
           { 
           
         
           prods.map(p =>
            <div  key={p.codigo} className="max-w-sm rounded overflow-hidden shadow-lg inline-block ">
        
            <div className="px-6 py-1 ml-2 ">
                <div className="font-bold text-xl mb-2 text-gray-600">{prod.nombreProducto}</div>
                <img className= "" src={prod.imagen} alt="producto"/>
                
                {getStockProd()>0 || getStockProd() ===undefined?
                <p className="text-gray-700 text-base">
                    Stock: {p.stock}
                </p>
                :
                <p className="text-red-700 text-base">
                    Stock: SIN STOCK
                </p>
                }
                <p className="text-gray-700 text-base">
                   Precio Por Persona: $   {prod.precioPorPersona}
                </p>
                <p className="text-gray-700 text-base">
                    Descripcion: {prod.descripcion}                    
                </p>
            </div>
            {getStockProd()>0 || getStockProd() ===undefined?
                <ItemCount onAdd={onAdd} Initial="1" Stock={prod.stock} limiteCantP={prod.limiteCantPersonas} />
            :            
            <div>                
                {p.stock!==undefined?
                <div>
                <Link to="/Cart"><button className="mb-3 ml-3 bg-red-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"  type="button">Finalizar Compra</button></Link> 
                <Link to="/"><button className="mt-3 mb-3 ml-3 bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" type="button">Seguir Comprando</button></Link>
                </div>:
                    <></>
                }
            </div>
            }
            </div>             
           )
            }
         </div>

    }
         </> 
       )
    
}

export default ItemDetail