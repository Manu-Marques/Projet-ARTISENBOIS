import { NavLink } from 'react-router-dom';
import { FaEnvelope} from 'react-icons/fa';

import './styles.scss';

export default function Header() {
    return (
      <div className="nav_container">
      <nav className="nav">
        <ul className="nav_bar">
          <li>
              <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
         <NavLink to="/chambre">Chambre <i className="arrow down"></i></NavLink>
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
              <NavLink to="/salon">Salon <i className="arrow down"></i></NavLink>
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
              <NavLink to="/cuisine">Cuisine <i className="arrow down"></i></NavLink>
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
              <NavLink to="/bureau">Bureau <i className="arrow down"></i></NavLink>
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
       <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-facebook-f"><FaEnvelope />
</span>
       </div>
       <div className="text">
          Contact
       </div>
      </NavLink>
 </div>
</div>
    );
  }
