import ItemCount from './ItemCount';
function ItemDetail({detail}) {
    return(
        <div className="product-detail">
        <h1>{detail?.name}</h1>
        <img src={detail?.image} alt={detail?.name}/>
        <p>{detail?.description}</p>
        <p>${detail?.price}</p>
        <ItemCount product={detail}/>
    </div>
    )
}

export default ItemDetail;