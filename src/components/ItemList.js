import Item from "./Item"

const ItemList = ({productos}) => {
    return (
        <div>
        
            {
                productos.map(p =>
                   <Item key = {p.codigo} nombreProducto = {p.nombreProducto} precioPorPersona = {p.precioPorPersona} urlImagen = {p.imagen} limiteCantPersonas = {p.limiteCantPersonas}/>
                   
                )
            }
        </div>
    )
}

export default ItemList