import Header from '../components/Header';
import Login from '../components/Login';
import Contact from '../components/Contact';
import Chambre from '../components/Chambre';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Header/>
<Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/chambre" element={<Chambre />} />
</Routes>
    </div>
  );
}

export default App;
