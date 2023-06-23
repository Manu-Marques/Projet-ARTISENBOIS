import './styles.scss';
import { NavLink } from 'react-router-dom';
import Bureau from '../../../src/assets/bureau.jpg';


export default function Agencements({results, category}) {


  return (
    <div className="main">
      <h1 className="main_title">Agencements sur mesure</h1>
      <div className="row1">
        {
         Object.keys(results).map((category, index) => {
            return (
              <div key={index} className="image">
                <img src={Bureau} alt="" />
                <div className="details">
                  <h2>{category}</h2>
                  <div className="more">
                    <NavLink 
                      to={`/agencements_sur_mesure/galerie/${category}}`}
                      className="read-more"
                    >
                      Galerie
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