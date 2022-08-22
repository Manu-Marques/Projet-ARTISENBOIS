import { NavLink } from 'react-router-dom';
import { FaEnvelope} from 'react-icons/fa';

import './styles.scss';

export default function Header() {
    return (
      <div className="nav_container">
              <span className="logo"><img className="logo_img" src="https://zupimages.net/up/22/32/h67g.jpg" alt="Logo ArtisenBois" /></span>
      <nav className="nav">
        <ul class="navbar">
          <li>
              <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
         <NavLink to="/chambre">Chambre <i class="arrow down"></i></NavLink>
            <ul>
              <li>
                  <NavLink to="/chambre/placard">Placard</NavLink>
              </li>
              <li>
                  <NavLink to="/chambre/lit">Lit</NavLink>
              </li>
              <li>
                  <NavLink to="/chambre/meuble">Meuble</NavLink>
              </li>
            </ul>
          </li>
          <li>
              <NavLink to="/salon">Salon <i class="arrow down"></i></NavLink>
            <ul>
              <li>
                  <NavLink to="/salon/buffet">Buffet</NavLink>
              </li>
              <li>
                  <NavLink to="/salon/table">Table</NavLink>
              </li>
              <li>
                  <NavLink to="/salon/chaise">Chaise</NavLink>
              </li>
            </ul>
          </li>
          <li>
              <NavLink to="/cuisine">Cuisine <i class="arrow down"></i></NavLink>
            <ul>
              <li>
                  <NavLink to="/cuisine/plan-de-travail">Plan de travail</NavLink>
              </li>
              <li>
                  <NavLink to="/cuisine/meuble">Meuble</NavLink>
              </li>
              <li>
                  <NavLink to="/cuisine/placard">Placard</NavLink>
              </li>
            </ul>
          </li>
          <li>
              <NavLink to="/salle-de-bain">Salle de bain <i class="arrow down"></i></NavLink>
            <ul>
              <li>
                  <NavLink to="/salle-de-bain/petit-placard">Petit placard</NavLink>
              </li>
              <li>
                  <NavLink to="/salle-de-bain/placard-levier">Placard lévier</NavLink>
              </li>
              <li>
                  <NavLink to="/salle-de-bain/meuble-rangement">Meuble rangement</NavLink>
              </li>
            </ul>
          </li>
          <li>
              <NavLink to="/bureau">Bureau <i class="arrow down"></i></NavLink>
            <ul>
              <li>
                  <NavLink to="/bureau/table">Table</NavLink>
              </li>
              <li>
                  <NavLink to="/bureau/bibliotheque">Bibliothéque</NavLink>
              </li>
              <li>
                  <NavLink to="/bureau/meuble">Meuble</NavLink>
              </li>
              <li>
                  <NavLink to="/bureau/chaise">Chaise</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="icons">
      <NavLink className="iconContact" to="/contact">
       <div class="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="fab fa-facebook-f"><FaEnvelope />
</span>
       </div>
       <div class="text">
          Contact
       </div>
      </NavLink>
 </div>
</div>
    );
  }
