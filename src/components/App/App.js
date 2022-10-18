import './App.scss';

import Accueil from '../Home';
import Header from '../Header';
import Login from '../Login';
import Contact from '../Contact';
import Salons from '../Salons';
import Product from '../Product';
import Cuisines from '../Cuisines';
import Chambres from '../Chambres';
import Exterieurs from '../Exterieurs';
import SalleDeBains from '../Salle de bains';
import React from 'react';
import Footer from '../Footer';
import { Routes, Route } from 'react-router-dom';
import data from '../../data/details-products';
import { useEffect } from 'react';


export default function App() {
  
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div className="App">
      <Header results={data} />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/salons" element={<Salons results={data.salons} />} />
        <Route
          path="/chambres"
          element={<Chambres results={data.chambres} />}
        />
        <Route
          path="/salle-de-bains"
          element={<SalleDeBains results={data.salle_de_bains} />}
        />
        <Route
          path="/exterieurs"
          element={<Exterieurs results={data.exterieurs} />}
        />
        <Route
          path="/cuisines"
          element={<Cuisines results={data.cuisines} />}
        />
        <Route path="/login" element={<Login />} />

        <Route
          path="/salons/product/:id"
          element={<Product results={data.salons} />}
        />
        <Route
          path="/chambres/product/:id"
          element={<Product results={data.chambres} />}
        />
        <Route
          path="/salle-de-bains/product/:id"
          element={<Product results={data.salle_de_bains} />}
        />
        <Route
          path="/exterieurs/product/:id"
          element={<Product results={data.exterieurs} />}
        />
        <Route
          path="/cuisines/product/:id"
          element={<Product results={data.cuisines} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}