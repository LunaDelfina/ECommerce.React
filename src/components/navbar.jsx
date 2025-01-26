import { useState } from 'react';
import '../styles/navbar.css';
import React from 'react';
import logo from '../assets/Logo.png';
import CartWidget from './CartWidget.jsx';

function NavBar() {
    return (
        <>
            <div className='NavBar'>
                <section className="Logo">
                    <img src={logo} alt="" />
                    <h1>Nest</h1>
                </section>
                <div className="contenido">
                <section className='Categorias'>
                    <button>Comedor</button>
                    <button>Habitación</button>
                    <button>Jardín</button>
                    <button>Otros</button>
                </section>
                <CartWidget />
                </div>

            </div>
        </>
    );
}

export default NavBar;

