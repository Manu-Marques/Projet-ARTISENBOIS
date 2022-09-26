import './styles.scss';
import { NavLink } from 'react-router-dom';

export default function Chambres (results) {
  return (
<div className="main">
  <h1>Chambres</h1>
  <div className="row1">
    
      {
           results?.map && results.map((result) => {
              return (
                  <div className="image">
                  <img src="https://zupimages.net/up/22/35/f2n4.jpg" alt="" />
                  <div key={result.id} className="details">
                  <h2>{result.title}</h2>
                  <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page.</p>
                  <div className="more">
                  <NavLink to="/chambre/product"className="read-more">En savoir plus</NavLink>
                  <div className="icon-links">
                  </div>
                  </div>
                  </div>
                  </div>
              )
          })
      }
      </div>
     </div>
  )
}