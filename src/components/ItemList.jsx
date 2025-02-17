import Item from './Item';

function ItemList({items}){
    return(
        <div className="productos">
        {items.map(producto=>(
            <Item producto={producto} key={producto.id} />
        ))}
        </div>
    )

}

export default ItemList;