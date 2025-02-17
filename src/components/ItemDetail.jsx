function ItemDetail({detail}) {
    return(
        <div className="product-detail">
        <h1>{detail?.title}</h1>
        <img src={detail?.images} alt={detail?.title}/>
        <p>{detail?.description}</p>
        <p>${detail?.price}</p>
    </div>
    )
}

export default ItemDetail;