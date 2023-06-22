import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Produit = ({ selectedCategory, selectProduct, agencementsData }) => {
  const { category } = useParams();
  const products = agencementsData[category] || [];

    console.log('j/arrive ici pour troisieme fois');

  if (!selectProduct) {
    return null; // Ou affichez un indicateur de chargement ou un message d'attente
  }


  return (
    <div>
      <h2>Produits de {}</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/agencements_sur_mesure/${category}/${product.id}`} onClick={() => selectProduct(product)}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Produit;
