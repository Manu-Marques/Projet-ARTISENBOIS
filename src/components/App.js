import Accueil from '../components/Accueil';
import Header from '../components/Header';
import Login from '../components/Login';
import Contact from '../components/Contact';
import Chambre from '../components/Chambre';
import Product from '../components/Product';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div classNameName="App">
    <Header/>
<Routes>
    <Route path="/" element={<Accueil/>} />
    <Route path="/login" element={<Login />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/chambre" element={<Chambre />} />
    <Route path="/chambre/product" element={<Product />} />
</Routes>
    </div>
  );
}

export default App;
