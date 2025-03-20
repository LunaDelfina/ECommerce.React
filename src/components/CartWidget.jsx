import React from 'react';
import Carrito from '../assets/Carrito.png';
import {useContext} from 'react';
import {Link} from 'react-router';
import {cartContext} from '../context/cartContext';

function CartWidget(){
    const {getQuantity} = useContext(cartContext)
    const total=getQuantity()
    return(
        <>
        <Link to="/cart">
        <section className='Carrito'>
            <img src={Carrito} alt="" />
            <span className="CarritoNumero">{total}</span>
            </section>
        </Link>
        </>
    )

}

export default CartWidget;