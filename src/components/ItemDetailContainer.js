import { useEffect, useState } from "react"
import productosJSON from "../productos.json"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { query } from "firebase/firestore";
import { where } from "firebase/firestore";

import { collection, getDocs, doc, getFirestore } from "firebase/firestore"

const ItemDetailContainer = () =>{
    const [prods, setProds] = useState([])
    const { Slug } = useParams()
 
    
  // useEffect(()=>{
       // getItem(productosJSON, 2000)
       // .then((datos)=>setProds(datos))
      // setTimeout(() => {
       // getItem();
      // }, 2000);
        
   //}, [])
    
   useEffect(()=>{
    // getDatos(productosJSON, 3000)
    //.then((datos)=>setProductos(datos))     
    const db = getFirestore();
     
    const itemsCollection = query(collection(db, "items"), where("Slug", "==", Slug));
         
    getDocs(itemsCollection).then((snapshot) =>{
       setProds(snapshot.docs.map((doc) => ({id: doc.codigo, ...doc.data()})));
    });
   }, []);
         
 
return (<div>     
        <p className="font-bold text-xl mb-2 text-gray-600 decoration-solid py-2 bg-green-100">Detalle del Producto</p>
        <ItemDetail prods={prods}/>        
    
    </div>)
    }

 

export default ItemDetailContainer