import { NavLink } from 'react-router-dom';
import Logo from '../../../src/assets/logo2.jpg';
import React from 'react';
import { useState, useEffect } from 'react';
import './styles.scss';


export default function Header() {
  const [open, setOpen] = useState(false);
  

  const toggleMobileNav = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.getElementById("close-buton").click()
    }
  }, [open]); 


  return (
    <div className={`wrapper ${open ? "show-nav" : "hidden-nav" }`} id="close-buton">
      <div className="wrapper_menu">
          <button onClick={toggleMobileNav} className="navbar_burger">
          <span className="burger-bar" />
          </button>
          <div className="wrapper_logo">
            <NavLink to="/">
              <img className="wrapper_img" src={Logo} alt="Logo_ArtisenBois" />
            </NavLink>
          </div>
        <ul className="wrapper_container">

          <li className="wrapper_links">
            <NavLink onClick={() => setOpen(false)} className="wrapper_link" to="/salons">Placards</NavLink>
          </li>

          <li className="wrapper_links">
            <NavLink onClick={() => setOpen(false)}  className="wrapper_link"  to="/chambres">Parquets</NavLink>
            
          </li>

          <li className="wrapper_links">
            <NavLink onClick={() => setOpen(false)}  className="wrapper_link"  to="/salle-de-bains">Portes d'entrée et fenêtres</NavLink>
          </li>

          <li className="wrapper_links">
            <NavLink onClick={() => setOpen(false)}  className="wrapper_link"  to="/menuiserie_exterieurs">Menuiserie Extérieurs</NavLink>
          </li>

          <li className="wrapper_links">
            <NavLink onClick={() => setOpen(false)}  className="wrapper_link"  to="/cuisines">Cuisines</NavLink>
          </li>

          <li className="wrapper_links">
            <NavLink onClick={() => setOpen(false)}  className="wrapper_link"  to="/interieurs">Intérieurs</NavLink>
          </li>

          <li className="wrapper_links">
            <NavLink onClick={() => setOpen(false)}  className="wrapper_link"  to="/escaliers">Sous escaliers et sous pentes</NavLink>
          </li>
        </ul>
        </div>
    </div>
  );
}


