import './App.scss';

import Accueil from '../Home';
import Header from '../Header';
import Contact from '../Contact';
import Product from '../Product';
import Sols from '../Sols';
import Amenagements from '../Amenagements';
import Menuiserie from '../Menuiserie';
import Agencements from '../Agencements';
import Footer from '../Footer';
import { Routes, Route } from 'react-router-dom';
import data from '../../data/details-products';
import ScrollToTop from '../ScrollToTop';


export default function App() {

  return (
    <div className="App">
      <Header results={data} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/amenagements_exterieurs"
          element={<Amenagements results={data.amenagements} />}
        />
        <Route
          path="/menuiserie_exterieur"
          element={<Menuiserie results={data.menuiserie} />}
        />
        <Route
          path="/revetements_de_sols"
          element={<Sols results={data.sols} />}
        />
        <Route
          path="/agencements_sur_mesure"
          element={<Agencements results={data.agencements} />}
        />
        <Route
          path="/agencements_sur_mesure/galerie"
          element={<Agencements results={data.agencements} />}
        />

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
          path="/cuisines/product/:id"
          element={<Product results={data.cuisines} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}