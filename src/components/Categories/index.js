import { Link } from 'react-router-dom';
import './styles.scss';
import { useState } from 'react';

export default function Categories ({ categories, selectCategory }) {


   console.log('j/arrive ici pour la 1ere fois');
   
  return (
    <div>
      <h2>Agencements sur mesure</h2>
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
