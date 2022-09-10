import Item from "./Item"

const ItemList = ({productos}) => {
    return (
        <div className="divCentral">
        
            {
                productos.map(p =>
                   <Item key =  {p.codigo} Slug={p.Slug} nombreProducto = {p.nombreProducto} precioPorPersona = {p.precioPorPersona} urlImagen = {p.imagen} limiteCantPersonas = {p.limiteCantPersonas}/>
                  
                )
            }
        </div>
    )
}

export default ItemList