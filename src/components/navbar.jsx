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
                <Link to="/"><section className="Logo">
                    <img src={logo} alt="" />
                    <h1>Nest</h1>
                </section>
                </Link>
                <div className="contenido">
                <section className='Categorias'>
                    <Link to="category/Comedor"><button>Comedor</button></Link>
                    <Link to="category/Habitacion"><button>Habitación</button></Link>
                    <Link to="category/Jardin"><button>Jardín</button></Link>
                    <Link to="category/Otro"><button>Otros</button></Link>
                </section>
                <CartWidget />
                </div>

            </div>
        </>
    );
}

export default NavBar;

