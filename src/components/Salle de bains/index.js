import './styles.scss';
import { NavLink } from 'react-router-dom';

export default function SalleDeBains(results) {
  return (
    <div className="main">
      <h1>Chambre</h1>
      <div className="row1">
        {

          results.results?.map((result) => {
            return (
              <div key={result.id} className="image">
                <img src="https://zupimages.net/up/22/35/f2n4.jpg" alt="" />
                <div className="details">
                  <h2>{result.title}</h2>
                  <p>{result.description}</p>
                  <div className="more">
                    <NavLink to="/chambre/product" className="read-more">En savoir plus</NavLink>
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