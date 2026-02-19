import React, { useState, useEffect } from 'react';
import './App.css'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import HomePage from './components/ProductCard'
import ShoppingCartLoop from './components/ShoppingCart'
import Header from './components/Header'
import {getCart } from "./components/Functions.js"

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);
  return (
    <BrowserRouter>
    <Header cart={cart}/>
      <Routes>
          <Route
            path="/"
            element={<HomePage cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<ShoppingCartLoop cart={cart} setCart={setCart} />}
          />
      </Routes>
    </BrowserRouter>
  )
}

export default App

