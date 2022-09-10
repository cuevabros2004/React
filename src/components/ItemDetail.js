const ItemDetail = ({prods}) =>{
 
    return (
        
           <div  className=" bg-base-100 shadow-xl px-6 py-6 my-15">
   
           { 
           prods.map(p =>
            <div  key={p.codigo} className="max-w-sm rounded overflow-hidden shadow-lg inline-block ">
        
            <div className="px-6 py-1 ml-2 ">
                <div className="font-bold text-xl mb-2 text-gray-600">{p.nombreProducto}</div>
                <img className= "" src={p.imagen} alt="producto"/>
                <p className="text-gray-700 text-base">
                   Precio Por Persona: $   {p.precioPorPersona}
                </p>
                <p className="text-gray-700 text-base">
                    Descripcion: {p.descripcion}
                </p>
            </div>
          
            </div>
             
           )
            }
         </div>
        
       )
    
}

export default ItemDetail