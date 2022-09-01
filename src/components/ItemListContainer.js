import { useEffect, useState } from "react"
import ItemList from "./ItemList";

const ItemListContainer = (  ) => {

    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
      fetch('./productos.json')
        .then (Resp => Resp.json())
        .then (datos => {
            setTimeout(() => {
            setProductos(datos)
          }, 2000);
        })
       
    }, [])

    return (
      <>
        <div className=""> 
            <ItemList productos = {productos} />
        </div>
      </>
    )
  }

  export default ItemListContainer