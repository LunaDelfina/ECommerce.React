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
                    <Link to="category/Notebook"><button>Comedor</button></Link>
                    <Link to="category/Cellphones"><button>Habitación</button></Link>
                    <Link to="category/furniture"><button>Jardín</button></Link>
                    <Link to="category/home-decoration"><button>Otros</button></Link>
                </section>
                <CartWidget />
                </div>

            </div>
        </>
    );
}

export default NavBar;

