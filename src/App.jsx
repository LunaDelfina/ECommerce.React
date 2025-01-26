import { useState } from 'react'
import './App.css';
import React from 'react';
import NavBar from './components/navbar.jsx';
import ItemsListContainer from './components/ItemListContainer';
function App() {
  return (
    <>
      <NavBar />
      <ItemsListContainer text="Aqui estarán los Productos" />
    </>
  );
}

export default App;
