import { NavLink } from 'react-router-dom';
import Salon from '../../../src/assets/salon.jpg';
import Chambre from '../../../src/assets/chambre.jpg';
import Cuisine from '../../../src/assets/cuisine.jpg';
import Salle_De_Bain from '../../../src/assets/salle de bain.jpg';
import Terrasse from '../../../src/assets/terrasse.jpg';
import Logo from '../../../src/assets/logo2.jpg';
import React from 'react';
import { useState } from 'react';
import { CgMenuRoud } from 'react-icons/cg';
import './styles.scss';


export default function Header() {
  const [open, setOpen] = useState(false);
  

  const toggleMobileNav = () => {
    setOpen(!open);
  };
  console.log('tu me clique', toggleMobileNav);

  return (
    <div className={`wrapper ${open ? "show-nav" : "hidden-nav" }`}>
      <container className="wrapper_menu">
          <button onClick={toggleMobileNav} className="navbar_burger">
          <span className="burger-bar" />
          </button>
        <ul className="wrapper_container">
          <div className="wrapper_logo">
            <NavLink to="/">
              <img className="wrapper_img" src={Logo} alt="Logo_ArtisenBois" />
            </NavLink>
          </div>

          <li className="wrapper_links">
            <NavLink className="wrapper_link" to="/salons">Salons</NavLink>
          </li>

          {/* <li>
            <NavLink to="/login">Login</NavLink>
            <div className="sub_menu">
              <div className="col">
                <img src={Chambre} alt="chambres" />
              </div>
                  </div>
          </li> */}

          <li className="wrapper_links">
            <NavLink className="wrapper_link"  to="/chambres">Chambres</NavLink>
            
          </li>

          <li className="wrapper_links">
            <NavLink className="wrapper_link"  to="/salle-de-bains">Salle de Bains</NavLink>
          </li>

          <li className="wrapper_links">
            <NavLink className="wrapper_link"  to="/exterieurs">Extérieurs</NavLink>
          </li>

          <li className="wrapper_links">
            <NavLink className="wrapper_link"  to="/cuisines">Cuisines</NavLink>
          </li>

        </ul>
        </container>
    </div>
  );
}


