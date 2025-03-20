import {useState, useContext} from 'react';
import {cartContext} from '../context/cartContext';

function ItemCount ({product}){

    const {addToCart} =useContext(cartContext)
    const [count,setCount ]= useState(0)

    const handleAdd=() =>{
        setCount(count+1)
    }

    const handleRestar=() =>{
        if(count>0){
        setCount(count-1)
    }
    }

    const handleAddToCart =() =>{
        addToCart({...product, quantity:count})
    }

    

    return (
        <div className='item-count-container'>
        <div className='item-count'>
            <button onClick={handleAdd}>+</button>
            <p>{count}</p>
            <button onClick={handleRestar}>-</button>
        </div>
        <button onClick={handleAddToCart}>Añadir al carrito</button>
        </div>
    )
}

export default ItemCount