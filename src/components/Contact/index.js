import './styles.scss';
import { FaEnvelope} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Contact() {
return(
  <div class="wrapper">
	<div class="mega_menu">
		<ul>
               <img className="logo" src="https://zupimages.net/up/22/32/h67g.jpg" alt="Logo ArtisenBois" />
			<li><a href="#">popular</a></li>
			<li><a href="#">sports</a>
				<div class="sub_menu">
					<div class="col">
						<img src="football1.jpg" alt="foot_Ball"/>
						<p>football is unconditional love</p>
					</div>
					<div class="col">
						<img src="football2.jpg" alt="foot_Ball"/>
            <a href="#">sports</a>					</div>
					<div class="col">
						<img src="football3.jpg" alt="foot_Ball"/>
						<p>football is unconditional love</p>
					</div>
					<div class="col">
						<img src="football1.jpg" alt="foot_Ball"/>
						<p>football is unconditional love</p>
					</div>
				</div>
			</li>
			<li><a href="#">tv shows</a></li>
			<li><a href="#">movies</a></li>
			<li><a href="#">music</a></li>
			<li><a href="#">tech</a>
				<div class="sub_menu tech">
					<div class="col">
						<h4>The best way to predict the future is to invent it.</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quibusdam ipsum dicta commodi, ipsa praesentium laboriosam sit quos rem molestias illo, nisi labore deleniti officiis doloremque perferendis laborum cupiditate totam.</p>
					</div>
					<div class="col">
						<h4>The best way to predict the future is to invent it.</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quibusdam ipsum dicta commodi, ipsa praesentium laboriosam sit quos rem molestias illo, nisi labore deleniti officiis doloremque perferendis laborum cupiditate totam.</p>
					</div>
					<div class="col">
						<h4>The best way to predict the future is to invent it.</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quibusdam ipsum dicta commodi, ipsa praesentium laboriosam sit quos rem molestias illo, nisi labore deleniti officiis doloremque perferendis laborum cupiditate totam.</p>
					</div>
				</div>
			</li>
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
		</ul>
	</div>
</div>
)
}