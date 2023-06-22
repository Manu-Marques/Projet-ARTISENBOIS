import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SousCategorie = ({ selectedCategory, agencementsData, selectProduct, product }) => {
    const { category } = useParams();
    const subCategories = agencementsData[selectedCategory] || [];

    console.log('j/arrive ici pour la 2eme fois');

    console.log(subCategories);

    return (
        <div>
            <h2>Sous-catégories de {category}</h2>
            <ul>
                {subCategories.map((subCategory) => (
                    <li key={subCategory}>
                        <Link to={`/agencements_sur_mesure/${selectedCategory}/${subCategory.id}`} onClick={() => selectProduct()}>
                            {subCategory.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SousCategorie;
