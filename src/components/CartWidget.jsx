import React from 'react';
import Carrito from '../assets/Carrito.png';
function CartWidget(){
    return(
        <>
        <section class='Carrito'>
            <img src={Carrito} alt="" />
            <span className="CarritoNumero">3</span>
            </section></>
    )

}

export default CartWidget;