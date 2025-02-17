import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemList from './ItemList';
import '../styles/products.css';
import {withLoading} from '../hoc/withLoading';

const ItemListWithLoading = withLoading(ItemList);

function ItemsListContainer(){
    const [items, setItems] = useState([]);
    const {id}=useParams();


    useEffect(() => {
        const allProducts='https://dummyjson.com/products';
        const byCategory=`https://dummyjson.com/products/category/${id}`
        fetch(id ? byCategory : allProducts)
        .then(res => res.json())
        .then(res=> setItems(res.products));
        
        
    },[id])
    return(   
        <div className='products-container'>
            <h1>Productos Recomendados</h1>
            <ItemListWithLoading items={items} />
        </div>
    )

}

export default ItemsListContainer;