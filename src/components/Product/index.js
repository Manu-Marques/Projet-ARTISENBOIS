import './styles.scss';
import Armoire from '../../../src/Images/armoire.jpg';
import { useState } from 'react';

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
                <div className="container3">
                    <div className="bloc-tabs">
                        <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}>Description détaillée</button>
                        <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}>Caractéristiques</button>
                        <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(3)}>Tab 3</button>
                    </div>

                    <div className="content-tabs">
                        <div className={toggleState === 1 ? "content  active-content" : "content"}>
                            <h2>Description du produit </h2>
                            <hr />
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        </div>

                        <div className={toggleState === 2 ? "content  active-content" : "content"}>
                            <h2>Content 2</h2>
                            <hr />
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        </div>

                        <div className={toggleState === 3 ? "content  active-content" : "content"}>
                            <h2>Content 3</h2>
                            <hr />
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        </div>
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