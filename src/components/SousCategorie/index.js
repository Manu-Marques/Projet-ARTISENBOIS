import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SousCategorie = ({ selectedCategory, amenagementsData, menuiserieData, revetementsData, agencementsData, selectProduct }) => {
    const { groupe, category } = useParams();

    let subCategories = [
        ...(agencementsData[selectedCategory] || []),
        ...(amenagementsData[selectedCategory] || []),
        ...(menuiserieData[selectedCategory] || []),
        ...(revetementsData[selectedCategory] || []),
    ];

    subCategories = subCategories.map((subCategory) => ({
        ...subCategory,
        title: subCategory.title.replace(/_/g, ' '),
    }));



    console.log(subCategories)
    console.log('j/arrive ici pour la 2eme fois');

    return (
        <div>
            <h2>Sous-catégories de {category.replace(/_/g, ' ')}</h2>
            <ul>
                {subCategories.map((subCategory) => (
                    <li key={subCategory.id}>
                        <Link to={`/${groupe}/${selectedCategory}/${subCategory.id}`} onClick={() => selectProduct()}>
                            {subCategory.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SousCategorie;
