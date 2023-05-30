import './styles.scss';
import { NavLink } from 'react-router-dom';
import Bureau from '../../../src/assets/bureau.jpg';
import React from 'react';



export default function Sallons(results) {
  return (
    <div className="main">
      <div class="main_raw">
        <h1 className="main_title">Placards</h1>
      </div>
      <div className="row1">
        {
          results.results?.map((result) => {
            return (
              <div key={result.id} className="image">
                <img src={Bureau} alt="" />
                <div className="details">
                  <h2>{result.title}</h2>
                  <p>{result.description}</p>
                  <div className="more">
                    <NavLink
                      to={`/salons/product/${result.title}`}
                      className="read-more"
                    >
                      En savoir plus
                    </NavLink>
                    <div className="icon-links"></div>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}
