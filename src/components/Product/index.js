import './styles.scss';
import Armoire from '../../../src/Images/armoire.jpg';

export default function Product () {
    return (
        <div className="container2">
                <img className="container2_product" src={Armoire} alt="" />
        <div className="container2_description">
            <h1 className="container2_title">Armoire</h1>
            <h4 className="container2_details">Type de bois : <span className="container2_line"> Chêne</span></h4>
            <h4 className="container2_details">Dimensions : <span>200x100x50</span></h4>
            <h4 className="container2_details">Poids : <span>100kg</span></h4>
            <h4 className="container2_details">Couleur : <span>Marron</span></h4>
            <h4 className="container2_details">Nombre de portes : <span>2</span></h4>
            <p className="container2_text">Le lorem ipsum est, en imprimerie, une suite de mots sans signification.</p>
            </div>
        </div>
    )
}