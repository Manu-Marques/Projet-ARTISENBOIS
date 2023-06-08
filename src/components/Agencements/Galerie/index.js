import "./styles.scss";
import { NavLink } from "react-router-dom";


export default function Agencements({ results }) {
   if (results) {
   console.log(results);
   }
   
   return (
      <div className="main">
        <h1 className="main_title">Agencements sur mesure</h1>
        <div className="row1">
          {
             results.map((result) => {
                return (
                   <div key={result.sous_escaliers} className="image">
                 <img src={result.image} alt="" />
                 <div className="details">
                    <h2>{result.sous_escaliers.title}</h2>
                    <p>{result.description}</p>
                    <div className="more">
                      <NavLink
                         to={`/agencements_sur_mesure/galerie/product/${result.title}`}
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