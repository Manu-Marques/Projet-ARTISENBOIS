import { NavLink } from 'react-router-dom';
import  Salon  from '../../../src/Images/salon.jpg';
import  Chambre  from '../../../src/Images/chambre.jpg';
import  Cuisine  from '../../../src/Images/cuisine.jpg';
import  Salle_De_Bain  from '../../../src/Images/salle de bain.jpg';
import  Terrasse  from '../../../src/Images/terrasse.jpg';


import './styles.scss';

export default function Header() {
    return (
      <div class="wrapper">
      <div class="mega_menu">
        <ul>
          <div class="logo_menu">
        <NavLink to="/"><img className="logo" src="https://zupimages.net/up/22/32/h67g.jpg" alt="Logo_ArtisenBois" /> </NavLink>
          </div>
          <li><NavLink to="/chambre/salons">Salons</NavLink>
          <div class="sub_menu">
              <div class="col">
                <img src= {Salon} alt="salon"/>
              </div>
              <div class="col">
                <NavLink to="/chambre/bibliotheque" className="col_navigation">Bibliothéque</NavLink>
                </div>
              <div class="col">
              <NavLink to="/chambre/meuble" className="col_navigation">Buffet de rangement</NavLink>
              </div>
              <div class="col">
              <NavLink to="/chambre/table_a_manger" className="col_navigation">Table à manger</NavLink>
              </div>
              <div class="col">
              <NavLink to="/chambre/chaise" className="col_navigation">Chaise</NavLink>
              </div>

            </div>
          </li>
    
          <li><NavLink to="/chambre">Chambres</NavLink>
            <div class="sub_menu">
              <div class="col">
                <img src={Chambre} alt="chambre"/>
              </div>
              <div class="col">
                <NavLink to="/chambre/armoire" className="col_navigation">Armoire</NavLink>
                </div>
              <div class="col">
              <NavLink to="/chambre/lit" className="col_navigation">Lit</NavLink>
              </div>
              <div class="col">
              <NavLink to="/chambre/dressing" className="col_navigation">Dressing</NavLink>
              </div>
              <div class="col">
              <NavLink to="/chambre/commode" className="col_navigation">Commode</NavLink>
              </div>
            </div>
          </li>

          <li><NavLink to="/chambre">Salle de Bains</NavLink>
          <div class="sub_menu">
              <div class="col">
                <img src={Salle_De_Bain} alt="salle_de_bain"/>
              </div>
              <div class="col">
              <NavLink to="/chambre/meuble" className="col_navigation">Meuble vasque</NavLink>
                </div>
              <div class="col">
              <NavLink to="/chambre/meuble" className="col_navigation">Chaise</NavLink>
              </div>
              <div class="col">
              <NavLink to="/chambre/meuble" className="col_navigation">Chaise</NavLink>
              </div>
              <div class="col">
                <NavLink to="/chambre/armoire" className="col_navigation">Armoire</NavLink>
                </div>
            </div>
          </li>

          <li><NavLink to="/chambre">Terrasse</NavLink>
          <div class="sub_menu">
              <div class="col">
                <img src={Terrasse} alt="terrasse"/>
              </div>
              <div class="col">
              <NavLink to="/chambre/meuble" className="col_navigation">Chaise</NavLink>
              </div>
              <div class="col">
              <NavLink to="/chambre/meuble" className="col_navigation">Chaise</NavLink>
              </div>
              <div class="col">
              <NavLink to="/chambre/meuble" className="col_navigation">Chaise</NavLink>
              </div>
              <div class="col">
                <NavLink to="/chambre/armoire" className="col_navigation">Armoire</NavLink>
                </div>
            </div>
          </li>

   <li><NavLink to="/chambre">Cuisine</NavLink>
          <div class="sub_menu">
              <div class="col">
                <img src={Cuisine} alt="cuisine"/>
              </div>
              <div class="col">
              <NavLink to="/chambre/meuble" className="col_navigation">Chaise</NavLink>
            </div>
              <div class="col">
              <NavLink to="/chambre/meuble" className="col_navigation">Chaise</NavLink>
            </div>
              <div class="col">
              <NavLink to="/chambre/meuble" className="col_navigation">Chaise</NavLink>
              </div>
              <div class="col">
                <NavLink to="/chambre/armoire" className="col_navigation">Armoire</NavLink>
                </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    );
  }
