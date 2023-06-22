import "./styles.scss";
import { NavLink } from "react-router-dom";


export default function SousCategorie({category, results }) {

const products = results[category];

console.log(category);

   return (
      <div className="main">
        <h1 className="main_title">{products}</h1>
        <div className="row1">
          {
             products.map((result, index) => {
                return (
                   <div key={result.Sous_escaliers} className="image">
                 <img src={result.image} alt="" />
                 <div className="details">
                    <h2>{result.title}</h2>
                    <div className="more">
                      <NavLink
                         to={`/agencements_sur_mesure/galerie/${category}/${index}`}
                         className="read-more"
                         >
                         Voir les détails
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