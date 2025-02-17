import { useState } from 'react';
import '../styles/navbar.css';
import React from 'react';
import logo from '../assets/Logo.png';
import {Link} from 'react-router';  
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
                    <Link to="category/beauty"><button>Comedor</button></Link>
                    <Link to="category/fragances"><button>Habitación</button></Link>
                    <Link to="category/furniture"><button>Jardín</button></Link>
                    <Link to="category/Otros"><button>Otros</button></Link>
                </section>
                <CartWidget />
                </div>

            </div>
        </>
    );
}

export default NavBar;

