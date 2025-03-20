import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemList from './ItemList';
import '../styles/products.css';
import {withLoading} from '../hoc/withLoading';
import { getProducts, getProductsByCategory } from '../firebase/db';

const ItemListWithLoading = withLoading(ItemList);

function ItemsListContainer(){
    const [items, setItems] = useState([]);
    const {id}=useParams();


    useEffect(() => {
        if(id){
            getProductsByCategory(id).then(res => setItems(res))
        }else{
            getProducts().then(res => setItems(res))
        }
    },[id])
    return(   
        <div className='products-container'>
            <h1>Productos Recomendados</h1>
            <ItemListWithLoading items={items} />
        </div>
    )

}

export default ItemsListContainer;