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
  console.log(open);

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


