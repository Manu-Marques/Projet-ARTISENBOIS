import { NavLink } from 'react-router-dom';
import Salon from '../../../src/assets/salon.jpg';
import Chambre from '../../../src/assets/chambre.jpg';
import Cuisine from '../../../src/assets/cuisine.jpg';
import Salle_De_Bain from '../../../src/assets/salle de bain.jpg';
import Terrasse from '../../../src/assets/terrasse.jpg';
import Logo from '../../../src/assets/logo2.jpg';


import './styles.scss';

export default function Header(data) {
  console.log(data.results.salons);
  return (
    <div className="wrapper">
      <div className="mega_menu">
        <ul>
          <div className="logo_menu">
            <NavLink to="/">
              <img className="logo" src={Logo} alt="Logo_ArtisenBois" />{" "}
            </NavLink>
          </div>

          <li>
            <NavLink to="/salons">Salons</NavLink>

            <div className="sub_menu">
              <div className="col">
                <img src={Salon} alt="salon" />
              </div>

              {data.results.salons?.map((result) => {
                return (
                  <div key={result.id} className="col">
                    <NavLink
                      to={`/salons/product/${result.title}`}
                      className="col_navigation"
                    >
                      {result.title}
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </li>

          <li>
            <NavLink to="/chambres">Chambres</NavLink>
            <div className="sub_menu">
              <div className="col">
                <img src={Chambre} alt="chambres" />
              </div>
              {data.results.chambres?.map((result) => {
                return (
                  <div className="col">
                    <NavLink
                      to={`/chambres/product/${result.title}`}
                      className="col_navigation"
                    >
                      {result.title}
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </li>

          <li>
            <NavLink to="/salle-de-bains">Salle de Bains</NavLink>
            <div className="sub_menu">
              <div className="col">
                <img src={Salle_De_Bain} alt="salle_de_bain" />
              </div>

              {data.results.salle_de_bains?.map((result) => {
                return (
                  <div className="col">
                    <NavLink
                      to={`/salle-de-bains/product/${result.title}`}
                      className="col_navigation"
                    >
                      {result.title}
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </li>

          <li>
            <NavLink to="/exterieurs">Extérieurs</NavLink>
            <div className="sub_menu">
              <div className="col">
                <img src={Terrasse} alt="terrasse" />
              </div>
              {data.results.exterieurs?.map((result) => {
                return (
                  <div className="col">
                    <NavLink
                      to={`/exterieurs/product/${result.title}`}
                      className="col_navigation"
                    >
                      {result.title}
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </li>

          <li>
            <NavLink to="/cuisines">Cuisines</NavLink>
            <div className="sub_menu">
              <div className="col">
                <img src={Cuisine} alt="cuisines" />
              </div>

              {data.results.cuisines?.map((result) => {
                return (
                  <div className="col">
                    <NavLink
                      to={`/cuisines/product/${result.title}`}
                      className="col_navigation"
                    >
                      {result.title}
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
