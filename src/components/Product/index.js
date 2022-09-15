import './styles.scss';
import Armoire from '../../../src/Images/armoire.jpg';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStars } from '@fortawesome/free-regular-svg-icons';


export default function Product() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="container2">
            <img className="container2_product" src={Armoire} alt="" />
            <div className="container2_description">
                <h1 className="container2_title">Armoire</h1>
                <div class="container2_raiting">
                    <div class="container2_raiting_stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={farStars} />
                    <span class="container2_raiting_number">4.5</span>
                     </div>
                </div>
                <div className="container3">
                    <div className="bloc_tabs">
                        <button className={toggleState === 1 ? "tabs active_tabs" : "tabs"}
                            onClick={() => toggleTab(1)}>Description détaillée</button>
                        <button className={toggleState === 2 ? "tabs active_tabs" : "tabs"}
                            onClick={() => toggleTab(2)}>Caractéristiques</button>
                        <button className={toggleState === 3 ? "tabs active_tabs" : "tabs"}
                            onClick={() => toggleTab(3)}>Avis client</button>
                    </div>

                    <div className="content_tabs">
                        <div className={toggleState === 1 ? "content  active_content" : "content"}>
                            <hr />
                            <ul className="content_list">
                            <li className="content_details">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </li>
                            <li className="content_details">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </li>
                            <li className="content_details">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </li>
                            <li className="content_details">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </li>
                            </ul>
                        </div>

                        <div className={toggleState === 2 ? "content  active_content" : "content"}>
                            <hr />
                            <table className="content_table">
                                            <tr className="container2_details">Type de bois : <span className="container2_line"> Chêne</span></tr>
                                            <tr className="container2_details">Dimensions : <span className="container2_line">200x100x50</span></tr>
                                            <tr className="container2_details">Poids : <span className="container2_line">100kg</span></tr>
                                            <tr className="container2_details">Couleur : <span className="container2_line">Marron</span></tr>
                                            <tr className="container2_details">Nombre de portes : <span className="container2_line">2</span></tr>
                        </table>
                <hr/>
                        </div>
                        <div className={toggleState === 3 ? "content  active_content" : "content"}>
                            <h2>Content 3</h2>
                            <hr />
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}