import './App.scss';

import Accueil from '../Home';
import Header from '../Header';
import Contact from '../Contact';
import Placards from '../Placards';
import Product from '../Product';
import Cuisines from '../Cuisines';
import Amenagements from '../Amenagements';
import Menuiserie from '../Menuiserie';
import Entrée_Fenêtre from '../Entrée&Fenêtre';
import Interieurs from '../Interieurs';
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

        <Route path="/salons" element={<Placards results={data.placards} />} />
        <Route
          path="/amenagements"
          element={<Amenagements results={data.amenagements} />}
        />
        <Route
          path="/salle-de-bains"
          element={<Entrée_Fenêtre results={data.entrée_fenêtre} />}
        />
        <Route
          path="/menuiserie"
          element={<Menuiserie results={data.menuiserie} />}
        />
        <Route
          path="/cuisines"
          element={<Cuisines results={data.cuisines} />}
        />
        <Route
          path="/interieurs"
          element={<Interieurs results={data.interieurs} />}
        />
        <Route
          path="/agencements_sur_mesure"
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