import './App.scss';
import { useState } from 'react';

import Accueil from '../Home';
import Header from '../Header';
import Contact from '../Contact';
import DetailsProduct from '../DetailsProduct';
import Sols from '../Sols';
import Amenagements from '../Amenagements';
import Menuiserie from '../Menuiserie';
import Agencements from '../Agencements';
// import SousCategorie from '../GalerieWait';
import Footer from '../Footer';
import { Routes, Route } from 'react-router-dom';
import data from '../../data/agencements-sur-mesure';
// import data from '../../data/details-products';
import ScrollToTop from '../ScrollToTop';
import Categories from '../Categories';
import SousCategorie from '../SousCategorie';
import agencementsData from '../../data/agencements-sur-mesure';


export default function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = Object.keys(agencementsData);

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setSelectedProduct(null);
  };

  const selectProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="App">
      <Header results={data} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route
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
          element={<Agencements results={data} />}
        />
        <Route
          path="/agencements_sur_mesure/galerie"
          element={<Agencements results={data} />}
        />
        <Route
          path="/agencements_sur_mesure/galerie/:category"
          element={<SousCategorie results={data} />}
        />

        <Route
          path="/agencements_sur_mesure/product/:category/:id"
          element={<Product results={data} />}
        /> */}


        <Route exact path="/agencements_sur_mesure"
          element={
            <Categories
              categories={categories}
              selectCategory={selectCategory}
            />
          }
        />

        <Route exact path="/agencements_sur_mesure/:category"
          element={
            <SousCategorie
              selectedCategory={selectedCategory}
              agencementsData={agencementsData}
              selectProduct={selectProduct}
            />
          }
        />

        <Route exact path="/agencements_sur_mesure/:category/:productId"
          element={<DetailsProduct
            agencementsData={agencementsData} />}
            selectProduct={selectProduct}
        >
        </Route>



        {/* <Route
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
        /> */}
      </Routes>
      <Footer />
    </div>
  );
}