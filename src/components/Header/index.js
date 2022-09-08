import { NavLink } from 'react-router-dom';

import './styles.scss';

export default function Header() {
    return (
      <div class="wrapper">
      <div class="mega_menu">
        <ul>
          <div class="logo_menu">
        <NavLink to="/"><img className="logo" src="https://zupimages.net/up/22/32/h67g.jpg" alt="Logo ArtisenBois" /> </NavLink>
          </div>
          <li><NavLink to="/chambre/salons">Salons</NavLink>
          <div class="sub_menu">
              <div class="col">
                <img src="https://zupimages.net/up/22/35/f2n4.jpg" alt="foot_Ball"/>
              </div>
              <div class="col">
                <NavLink to="/chambre/armoire" className="col_navigation">Armoire</NavLink>
                </div>
              <div class="col">
              <NavLink to="/chambre/meuble" className="col_navigation">Meuble</NavLink>
              </div>
              <div class="col">
              <NavLink to="/chambre/meuble" className="col_navigation">Table</NavLink>
              </div>
              <div class="col">
              <NavLink to="/chambre/meuble" className="col_navigation">Chaise</NavLink>
              </div>

            </div>
          </li>
    
          <li><NavLink to="/chambre">Chambres</NavLink>
            <div class="sub_menu">
              <div class="col">
                <img src="https://zupimages.net/up/22/35/f2n4.jpg" alt="foot_Ball"/>
                <p>football is unconditional love</p>
              </div>
              <div class="col">
                <img src="https://zupimages.net/up/22/35/f2n4.jpg" alt="foot_Ball"/>
                <NavLink to="/chambre/armoire" className="col_navigation">Armoire</NavLink></div>
              <div class="col">
                <img src="https://zupimages.net/up/22/35/f2n4.jpg" alt="foot_Ball"/>
                <p>football is unconditional love</p>
              </div>
              <div class="col">
                <img src="https://zupimages.net/up/22/35/f2n4.jpg" alt="foot_Ball"/>
                <p>football is unconditional love</p>
              </div>
            </div>
          </li>

          <li><NavLink to="/chambre">Salle de Bains</NavLink>
          <div class="sub_menu">
              <div class="col">
                <img src="https://zupimages.net/up/22/35/f2n4.jpg" alt="foot_Ball"/>
                <p>football is unconditional love</p>
              </div>
              <div class="col">
                <img src="https://zupimages.net/up/22/35/f2n4.jpg" alt="foot_Ball"/>
                <a href="#">sports</a>					</div>
              <div class="col">
                <img src="https://zupimages.net/up/22/35/f2n4.jpg" alt="foot_Ball"/>
                <p>football is unconditional love</p>
              </div>
              <div class="col">
                <img src="https://zupimages.net/up/22/35/f2n4.jpg" alt="foot_Ball"/>
                <p>football is unconditional love</p>
              </div>
            </div>
          </li>

          <li><NavLink to="/chambre">Terrasse</NavLink>
          <div class="sub_menu">
              <div class="col">
                <img src="https://zupimages.net/up/22/35/f2n4.jpg" alt="foot_Ball"/>
                <p>football is unconditional love</p>
              </div>
              <div class="col">
                <img src="https://zupimages.net/up/22/35/f2n4.jpg" alt="foot_Ball"/>
                <a href="#">sports</a>					</div>
              <div class="col">
                <img src="https://zupimages.net/up/22/35/f2n4.jpg" alt="foot_Ball"/>
                <p>football is unconditional love</p>
              </div>
              <div class="col">
                <img src="https://zupimages.net/up/22/35/f2n4.jpg" alt="foot_Ball"/>
                <p>football is unconditional love</p>
              </div>
            </div>
          </li>

   <li><NavLink to="/chambre">Salons</NavLink>
          <div class="sub_menu">
              <div class="col">
                <img src="https://zupimages.net/up/22/35/f2n4.jpg" alt="foot_Ball"/>
                <p>football is unconditional love</p>
              </div>
              <div class="col">
                <img src="https://zupimages.net/up/22/35/f2n4.jpg" alt="foot_Ball"/>
                </div>
              <div class="col">
                <img src="https://zupimages.net/up/22/35/f2n4.jpg" alt="foot_Ball"/>
                <p>football is unconditional love</p>
              </div>
              <div class="col">
                <img src="https://zupimages.net/up/22/35/f2n4.jpg" alt="foot_Ball"/>
                <p>football is unconditional love</p>
              </div>
            </div>
          </li>
          <div className='search'>
          <label for="site">
          <input type="search" className="site_search" name="q"/>
          <button className="site_button">Search</button>
          </label>
          </div>
        </ul>
      </div>
    </div>
    );
  }
