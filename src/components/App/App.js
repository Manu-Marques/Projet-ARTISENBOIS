import './App.scss';

import Accueil from '../Home';
import Header from '../Header';
import Login from '../Login';
import Contact from '../Contact';
import Chambre from '../Chambre';
import Product from '../Product';
import React from 'react';
import Footer from '../Footer';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Header/>
<Routes>
    <Route path="/" element={<Accueil/>} />
    <Route path="/login" element={<Login />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/chambre" element={<Chambre />} />
    <Route path="/chambre/product" element={<Product />} />
</Routes>
    <Footer/>
    </div>
  );
}

export default App;
