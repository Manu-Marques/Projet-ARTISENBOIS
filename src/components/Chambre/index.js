import './styles.scss';
import { NavLink } from 'react-router-dom';

export default function Chambre () {
    return (
        <div className="main">
            <h1>Chambre</h1>
<div className="row">
<div className="image">
<img src="https://zupimages.net/up/22/35/f2n4.jpg" alt="" />
<div className="details">
<h2>Title</h2>
<p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page.</p>
<div className="more">
<NavLink to="/chambre/meuble"className="read-more">En savoir plus</NavLink>
<div className="icon-links">
</div>
</div>
</div>
</div>
<div className="image">
<img src="https://zupimages.net/up/22/35/f2n4.jpg" alt="" />
<div className="details">
<h2>Title</h2>
<p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page.</p>
<div className="more">
<NavLink to="/chambre/meuble"className="read-more">En savoir plus</NavLink>
<div className="icon-links">
</div>
</div>
</div>
</div>
<div className="image">
<img src="https://zupimages.net/up/22/35/f2n4.jpg" alt="" />
<div className="details">
<h2>Title</h2>
<p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page.</p>
<div className="more">
<NavLink to="/chambre/meuble"className="read-more">En savoir plus</NavLink>
<div className="icon-links">
</div>
</div>
</div>
</div>
</div>
  </div>
    )
}