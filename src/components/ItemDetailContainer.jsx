import {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import ItemDetail from './ItemDetail';
import '../styles/products.css';

function ItemDetailContainer (){
    const [detail, setDetail] = useState([]);
    const {id} = useParams([]);
    useEffect(()=>{
    fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(res => setDetail(res));
    },[id])
    return(
       <ItemDetail detail={detail}/>
    )
}
export default ItemDetailContainer;