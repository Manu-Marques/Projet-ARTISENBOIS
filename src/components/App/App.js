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
import Footer from '../Footer';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
import Categories from '../Categories';
import SousCategorie from '../SousCategorie';

//data
import agencementsData from '../../data/agencements-sur-mesure';
import amenagementsData from '../../data/amenagements-exterieurs';
import menuiserieData from '../../data/menuiserie-exterieurs';  
import revetementsData from '../../data/revetements-sols';


export default function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const agencementCategories = Object.keys(agencementsData);
  const amenagementsCategories = Object.keys(amenagementsData);
  const menuiserieCategories = Object.keys(menuiserieData);
  const revetementsCategories = Object.keys(revetementsData);

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setSelectedProduct(null);
  };

  const selectProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="App">
      <Header  />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />


        <Route
          path="/amenagements_exterieurs"
          element={
            <Categories
              categories={amenagementsCategories}
              selectCategory={selectCategory}
            />
          }
        />

        <Route
        path='menuiserie_exterieur'
        element={
          <Categories
            categories={menuiserieCategories}
            selectCategory={selectCategory}
          />
        }
        />

        <Route
        path='revetements_de_sols'
        element={
          <Categories
            categories={revetementsCategories}
            selectCategory={selectCategory}
          />
        }
        />

        <Route exact path="/agencements_sur_mesure"
          element={
            <Categories
              categories={agencementCategories}
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

        <Route exact path="/amenagements_exterieurs/:category"
          element={
            <SousCategorie
              selectedCategory={selectedCategory}
              amenagementsData={amenagementsData}
              selectProduct={selectProduct}
            />
          }
        />

        <Route exact path="/menuiserie_exterieur/:category"
          element={
            <SousCategorie
              selectedCategory={selectedCategory}
              menuiserieData={menuiserieData}
              selectProduct={selectProduct}
            />
          }
        />

        <Route exact path="/revetements_de_sols/:category"
          element={
            <SousCategorie
              selectedCategory={selectedCategory}
              revetementsData={revetementsData}
              selectProduct={selectProduct}
            />
          }
        />

        <Route exact path="/amenagements_exterieurs/:category/:productId"
          element={<DetailsProduct
            amenagementsData={amenagementsData} />}
            selectProduct={selectProduct}
        >
        </Route>
        


        <Route exact path="/agencements_sur_mesure/:category/:productId"
          element={<DetailsProduct
            agencementsData={agencementsData} />}
            selectProduct={selectProduct}
        >
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}