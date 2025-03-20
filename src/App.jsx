//import { useState } from 'react'
import './App.css';
import React from 'react';
import NavBar from './components/navbar';
import ItemsListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from './components/CartContainer';
import Checkout from './components/checkout';
import { BrowserRouter, Routes, Route } from 'react-router';
function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/" element={<ItemsListContainer />} />
        <Route path="/category/:id" element={<ItemsListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="*" element={<h1>No encontramos eso que buscas</h1>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
