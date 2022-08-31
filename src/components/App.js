import Accueil from '../components/Accueil';
import Header from '../components/Header';
import Login from '../components/Login';
import Contact from '../components/Contact';
import Chambre from '../components/Chambre';
import Meuble from '../components/Meuble';
import React from 'react';
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
    <Route path="/chambre/meuble" element={<Meuble />} />
</Routes>
    </div>
  );
}

export default App;
