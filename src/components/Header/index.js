import { NavLink } from 'react-router-dom';
import  Salon  from '../../../src/assets/salon.jpg';
import  Chambre  from '../../../src/assets/chambre.jpg';
import  Cuisine  from '../../../src/assets/cuisine.jpg';
import  Salle_De_Bain  from '../../../src/assets/salle de bain.jpg';
import  Terrasse  from '../../../src/assets/terrasse.jpg';


import './styles.scss';

export default function Header() {
    return (
      <div className="wrapper">
      <div className="mega_menu">
        <ul>
          <div className="logo_menu">
        <NavLink to="/"><img className="logo" src="https://zupimages.net/up/22/32/h67g.jpg" alt="Logo_ArtisenBois" /> </NavLink>
          </div>
          <li><NavLink to="/salons">Salons</NavLink>
          <div className="sub_menu">
              <div className="col">
                <img src= {Salon} alt="salon"/>
              </div>
              <div className="col">
                <NavLink to="/salon/bibliotheque-en-chene" className="col_navigation">Bibliothéque en chêne</NavLink>
                </div>
              <div className="col">
              <NavLink to="/salon/buffet-de-rangement" className="col_navigation">Buffet de rangement</NavLink>
              </div>
              <div className="col">
              <NavLink to="/salon/table-a-manger" className="col_navigation">Table à manger</NavLink>
              </div>
              <div className="col">
              <NavLink to="/salon/chaise-en-bois" className="col_navigation">Chaise en bois</NavLink>
              </div>

            </div>
          </li>
          
           {/* <li><NavLink to="/login">Login</NavLink>
          </li>  */}

    
          <li><NavLink to="/chambres">Chambres</NavLink>
            <div className="sub_menu">
              <div className="col">
                <img src={Chambre} alt="chambres"/>
              </div>
              <div className="col">
                <NavLink to="/chambre/armoire-panderie" className="col_navigation">Armoire penderie</NavLink>
                </div>
              <div className="col">
              <NavLink to="/chambre/lit-adulte" className="col_navigation">Lit adulte</NavLink>
              </div>
              <div className="col">
              <NavLink to="/chambre/dressing" className="col_navigation">Dressing</NavLink>
              </div>
            </div>
          </li>

          <li><NavLink to="/salle-de-bains">Salle de Bains</NavLink>
          <div className="sub_menu">
              <div className="col">
                <img src={Salle_De_Bain} alt="salle_de_bain"/>
              </div>
              <div className="col">
              <NavLink to="/salle-de-bain/meuble-vasque" className="col_navigation">Meuble vasque</NavLink>
                </div>
              <div className="col">
              <NavLink to="/salle-de-bain/colonne" className="col_navigation">Colonne</NavLink>
              </div>
              <div className="col">
                <NavLink to="/salle-de-bain/armoire-a-miroir" className="col_navigation">Armoire à miroir</NavLink>
                </div>
            </div>
          </li>

          <li><NavLink to="/exterieurs">Extérieurs</NavLink>
          <div className="sub_menu">
              <div className="col">
                <img src={Terrasse} alt="terrasse"/>
              </div>
              <div className="col">
              <NavLink to="/exterieurs/terrasse" className="col_navigation">Terrasse</NavLink>
              </div>
              <div className="col">
              <NavLink to="/exterieurs/chaise-de-jardin" className="col_navigation">Chaise de jardin</NavLink>
              </div>
              <div className="col">
              <NavLink to="/exterieurs/table-rectangulaire" className="col_navigation">Table rectangulaire </NavLink>
              </div>
              <div className="col">
                <NavLink to="/exterieurs/cabanon" className="col_navigation">Cabanon</NavLink>
                </div>
            </div>
          </li>

   <li><NavLink to="/cuisine">Cuisine</NavLink>
          <div className="sub_menu">
              <div className="col">
                <img src={Cuisine} alt="cuisines"/>
              </div>
              <div className="col">
              <NavLink to="/cuisine/buffet" className="col_navigation">Buffet</NavLink>
            </div>
              <div className="col">
              <NavLink to="/cuisine/meuble-bois-massif" className="col_navigation">Meuble bois massif</NavLink>
            </div>
              <div className="col">
              <NavLink to="/cuisine/plan-de-travail" className="col_navigation">Plan de travail</NavLink>
              </div>
              <div className="col">
                <NavLink to="/cuisine/meuble-rangement" className="col_navigation">Meuble rangement</NavLink>
                </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    );
  }
