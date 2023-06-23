import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Bureau from '../../../src/assets/bureau.jpg';
import './styles.scss';

export default function SousCategorie({ selectedCategory, amenagementsData, menuiserieData, revetementsData, agencementsData, selectProduct }) {
    const { groupe, category } = useParams();

    let subCategories = [
        ...(agencementsData[selectedCategory] || []),
        ...(amenagementsData[selectedCategory] || []),
        ...(menuiserieData[selectedCategory] || []),
        ...(revetementsData[selectedCategory] || []),
    ];


    console.log(subCategories);

    subCategories = subCategories.map((subCategory) => ({
        ...subCategory,
        title: subCategory.title.replace(/_/g, ' '),
    }));


    return (
        <div className='main'>
            <h2 className='main_title'>{category.replace(/_/g, ' ')}</h2>
            <div className='row1'>
                {subCategories.map((subCategory) => (
                    <div key={subCategory} className='image'>
                        <img src={Bureau} alt='' />
                        <div className='details'>
                            <h2 className='title'>{subCategory.title}</h2>
                            <div className='more'>
                                <Link to={`/${groupe}/${selectedCategory}/${subCategory.id}`} className='read-more' onClick={() => selectProduct()}>
                                    Détails
                                </Link>
                                <div className='icon-links'>                         
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

