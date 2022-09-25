import './App.scss';

import Accueil from '../Home';
import Header from '../Header';
import Login from '../Login';
import Contact from '../Contact';
import Salons from '../Salons';
import Product from '../Product';
import React from 'react';
import Footer from '../Footer';
import { Routes, Route } from 'react-router-dom';
import data from '../../data/details-products';


function App() {
  return (
    <div className="App">
    <Header/>
<Routes>
    <Route path="/" element={<Accueil/>} />
    <Route path="/login" element={<Login results={data.salons} />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/salons" element={<Salons results={data.salons}/>} />
    <Route path="/chambre/product" element={<Product  results={data}/>} />
</Routes>
    <Footer/>
    </div>
  );
}

export default App;
