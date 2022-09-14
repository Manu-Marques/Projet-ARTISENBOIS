import './styles.scss';
import Armoire from '../../../src/Images/armoire.jpg';

export default function Product () {
    return (
        <div className="container2">
                <img className="container2_product" src={Armoire} alt="" />
        <div className="container2_description">

            <h1 className="container2_title">Armoire</h1>
        
           <div class="container3">
            <div class="container3-onglets">
                <div class="onglets active">Destination</div>
                <div class="onglets">Voyage</div>
                <div class="onglets">Tarifs</div>
            </div>
            <div class="contenu">
                <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </h3>
                <hr></hr>
            </div>
           </div>
{/*             <div className="container2_main">
            <h4 className="container2_details">Type de bois : <span className="container2_line"> Chêne</span></h4>
            <h4 className="container2_details">Dimensions : <span className="container2_line">200x100x50</span></h4>
            <h4 className="container2_details">Poids : <span className="container2_line">100kg</span></h4>
            <h4 className="container2_details">Couleur : <span className="container2_line">Marron</span></h4>
            <h4 className="container2_details">Nombre de portes : <span className="container2_line">2</span></h4>
            <p className="container2_text">Le lorem ipsum est, en imprimerie, une suite de mots sans signification.</p>
            </div>
 */}            </div>
        </div>
    )
}