import './styles.scss';
import { NavLink } from 'react-router-dom';
import Bureau from '../../../src/assets/bureau.jpg';


export default function Agencements({results}) {

  const tableNames = Object.keys(results).filter(
    (key) => Array.isArray(results[key])
  );

    console.log(tableNames)

  return (
    <div className="main">
      <h1 className="main_title">Agencements sur mesure</h1>
      <div className="row1">
        {
         tableNames.map((result) => {
            return (
              <div key={result.id} className="image">
                <img src={Bureau} alt="" />
                <div className="details">
                  <h2>{result}</h2>
                  <p>{result.description}</p>
                  <div className="more">
                    <NavLink
                      to={`/agencements_sur_mesure/galerie/${result.title}`}
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