import './App.scss';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';

//components
import Accueil from '../Home';
import Header from '../Header';
import Contact from '../Contact';
import Footer from '../Footer';
import DetailsProduct from '../DetailsProduct';
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

  const [agencementCategories, amenagementsCategories, menuiserieCategories, revetementsCategories] = [
    Object.keys(agencementsData),
    Object.keys(amenagementsData),
    Object.keys(menuiserieData),
    Object.keys(revetementsData)
  ];
  
  const selectCategory = (category) => {
    setSelectedCategory(category);
    setSelectedProduct(null);
  };

  const selectProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />


        <Route
          path="/amenagements_exterieurs"
          element={
            <Categories
              groupe="amenagements_exterieurs"
              categories={amenagementsCategories}
              selectCategory={selectCategory}
            />
          }
        />

        <Route
          path='menuiserie_exterieur'
          element={
            <Categories
              groupe="menuiserie_exterieur"
              categories={menuiserieCategories}
              selectCategory={selectCategory}
            />
          }
        />

        <Route
          path='revetements_de_sols'
          element={
            <Categories
              groupe="revetements_de_sols"
              categories={revetementsCategories}
              selectCategory={selectCategory}
            />
          }
        />

        <Route exact path="/agencements_sur_mesure"
          element={
            <Categories
              groupe="agencements_sur_mesure"
              categories={agencementCategories}
              selectCategory={selectCategory}
            />
          }
        />

        <Route exact path="/:groupe/:category"
          element={
            <SousCategorie
              selectedCategory={selectedCategory}
              agencementsData={agencementsData}
              amenagementsData={amenagementsData}
              menuiserieData={menuiserieData}
              revetementsData={revetementsData}
              selectProduct={selectProduct}
            />
          }
        />

        <Route exact path="/:groupe/:category/:productId" element={
          <DetailsProduct
            amenagementsData={amenagementsData}
            agencementsData={agencementsData}
            menuiserieData={menuiserieData}
            revetementsData={revetementsData}
            selectProduct={selectProduct}
          />
        }></Route>
      </Routes>
      <Footer />
    </div>
  );
}