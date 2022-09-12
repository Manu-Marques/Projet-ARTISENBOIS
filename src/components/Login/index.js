import './styles.scss';
import { NavLink } from 'react-router-dom';
import { FaEnvelope} from 'react-icons/fa';

export default function Login () {
    return (
        <div classNameName="login_container">
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
    )
}