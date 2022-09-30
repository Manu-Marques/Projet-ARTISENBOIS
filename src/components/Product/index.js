import './styles.scss';
import Armoire from '../../../src/assets/armoire.jpg';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStars } from '@fortawesome/free-regular-svg-icons';
import { useParams } from 'react-router-dom';


export default function Product({ results }) {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
        const { id } = useParams();
        const product = results.filter((product) => product.title === id);

    return (
        <div className="container2">
            <img className="container2_product" src={Armoire} alt="" />
            <div className="container3">
                <div className="container2_raiting">
                    <h1 className="container2_title">{id}</h1>
                    <div className="container2_raiting_stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={farStars} />
                        <span className="container2_raiting_number">4.5</span>
                    </div>
                </div>

                <div className="bloc_tabs">
                    <button className={toggleState === 1 ? "tabs active_tabs" : "tabs"}
                        onClick={() => toggleTab(1)}>Description détaillée</button>
                    <button className={toggleState === 2 ? "tabs active_tabs" : "tabs"}
                        onClick={() => toggleTab(2)}>Caractéristiques</button>
                    <button className={toggleState === 3 ? "tabs active_tabs" : "tabs"}
                        onClick={() => toggleTab(3)}>Question fréquentes</button>
                </div>

                <div className="content_tabs">
                    <div className={toggleState === 1 ? "content  active_content" : "content"}>
                        <div className="content_text">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum earum nesciunt nulla
                                veritatis natus ratione repellat dolorum, quidem, enim voluptatem at ullam nihil providen
                                non facilis fugit consequatur, fuga alias!
                            </p>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "content  active_content" : "content"}>
                            {
                              product.map((result) => {
                                return (
                                <ul key={result.id} className="content_table">
                            <li className="container2_details">Type de bois : <span className="container2_line"></span>{result.title}</li>
                            <li className="container2_details">Dimensions : <span className="container2_line">200x100x50</span></li>
                            <li className="container2_details">Poids : <span className="container2_line">100kg</span></li>
                            <li className="container2_details">Couleur : <span className="container2_line">Marron</span></li>
                            <li className="container2_details">Nombre de portes : <span className="container2_line">2</span></li>
                        </ul>
 )    
                    }
                    )}
                               
                    </div>
                    <div className={toggleState === 3 ? "content  active_content" : "content"}>
                        <div className="content_text">
                            <p>
                                Question : Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <p>
                                Réponse : Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}