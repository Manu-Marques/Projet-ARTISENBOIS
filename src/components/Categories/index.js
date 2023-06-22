import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ categories, selectCategory }) => {

   console.log('j/arrive ici pour la 1ere fois');
   
  return (
    <div>
      <h2>Galerie</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/agencements_sur_mesure/${category}`} onClick={() => selectCategory(category)}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
