import './styles.scss';
import { NavLink } from 'react-router-dom';
import Bureau from '../../../src/assets/bureau.jpg';


export default function Chambre(results) {

  return (
    <div className="main">
      <h1>Chambre</h1>
      <div className="row1">
        {
          results.results?.map((result) => {
            return (
              <div key={result.id} className="image">
                <img src={Bureau} alt="" />
                <div className="details">
                  <h2>{result.title}</h2>
                  <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page.</p>
                  <div className="more">
                    <NavLink to={`/chambres/product/${result.title}`}className="read-more">En savoir plus</NavLink>
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
