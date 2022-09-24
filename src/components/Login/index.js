import './styles.scss';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

 export default function Login (results) {
    return (
<div className="main">
    <h1>Chambre</h1>
    <div class="main_container">
        <div className="main_row">
            {
                 results.results?.map((result) => {
                    return (
                        <div className="main_image">
                        <img className="main_img" src="https://zupimages.net/up/22/35/f2n4.jpg" alt="" />
                        <div key={result.id} className="main_details">
                        <h2>{result.title}</h2>
                        <p className="main_text">Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page.</p>
                        <div className="main_more">
                        <NavLink to="/chambre/product"className="main_read-more">En savoir plus</NavLink>
                        <div className="main_icon-links">
                        </div>
                        </div>
                        </div>
                        </div>
                    )
                })
            }
            </div>
    </div>
       </div>
    )
}
