import {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import ItemDetail from './ItemDetail';
import { getProducts } from '../firebase/db';
import '../styles/product.css';

function ItemDetailContainer (){
    const [detail, setDetail] = useState([]);
    const {id} = useParams([]);
    
    useEffect(() => {
        getProducts().then(res => {
            const foundProduct = res.find(product => product.id === id); 
            setDetail(foundProduct || {}); 
        });
    }, [id]);
    
    return(
       <ItemDetail detail={detail}/>
    )
}
export default ItemDetailContainer;