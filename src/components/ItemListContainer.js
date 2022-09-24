import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import productosJSON from "../productos.json"
import Spinner from "./Spinner";
import CartContext from "./context/CartContext";
import { useContext } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { query } from "firebase/firestore";
import { where } from "firebase/firestore";

const ItemListContainer = (  ) => {
    const [productos, setProductos] = useState([]);
    const {categoryId} = useParams()
    const [loading, setLoading] = useState(true)

   
     useEffect(()=>{
       // getDatos(productosJSON, 3000)
       //.then((datos)=>setProductos(datos))     
       const db = getFirestore();
        
       const itemsCollection = categoryId===undefined? collection(db, "items") :  query(collection(db, "items"), where("categoria", "==", categoryId));
            
       getDocs(itemsCollection).then((snapshot) =>{
          setProductos(snapshot.docs.map((doc) => ({id: doc.codigo, ...doc.data()})));
          setLoading(false)   
       });
      }, [categoryId]);
 
 /*const getDatos = (datos, tiempo)=>{
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (datos){
              resolve(datos)     
              setLoading(false)           
          }
          else{
              reject("error")                
          }
          
      }, tiempo);
  }
  )
  
 }*/

    return (
      <>
        <div className="divCentral">     
        {loading?
          <div className="mb-5 mt-5">
            <Spinner/>
          </div>
          :       
          <div>             
            <ItemList productos = {productos} />
          </div>
          }
        </div>
      
      </>
    )
  }

  export default ItemListContainer