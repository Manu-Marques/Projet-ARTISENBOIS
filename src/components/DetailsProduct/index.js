import './styles.scss';
import { useParams } from 'react-router-dom';
import { useState } from 'react';


export default function DetailsProduct({amenagementsData, menuiserieData, revetementsData, agencementsData  }) {

  const {groupe, category, productId } = useParams();

  let selectedCategory = agencementsData[category] || menuiserieData[category] || revetementsData[category] || amenagementsData[category] || [];


  if (groupe === 'amenagements_exterieurs') {
    selectedCategory = amenagementsData[category] || [];
  } else if (groupe === 'menuiserie_exterieur') {
    selectedCategory = menuiserieData[category] || [];
  } else if (groupe === 'revetements_de_sols') {
    selectedCategory = revetementsData[category] || [];
  } else if (groupe === 'agencements_sur_mesure') {
    selectedCategory = agencementsData[category] || [];
  }


  const products = selectedCategory.find((product) => product.id === productId);


  const [toggleState, setToggleState] = useState(1);


  if (!products) {
    return null;
  }

  const toggleTab = (index) => {
    setToggleState(index);
  };


  return (
    <div className="container2">
      <><div>
        <h1 className="container2_title">{products.title}</h1>
        <h1 className="container2_title">{products.description}</h1>
      </div>
        <img key={products.id} className="container2_product" src={products.image} alt="" />
      </>
      <div className="container3">
        <h1 className="container2_title">{ }</h1>
        <div className="bloc_tabs">
          <button
            className={toggleState === 1 ? "tabs active_tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Description détaillée
          </button>
          <button
            className={toggleState === 2 ? "tabs active_tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Caractéristiques
          </button>
          <button
            className={toggleState === 3 ? "tabs active_tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Question fréquentes
          </button>
        </div>

        <div className="content_tabs">
          <div
            className={
              toggleState === 1 ? "content  active_content" : "content"
            }
          >
            <div className="content_text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum earum nesciunt nulla veritatis natus ratione
                repellat dolorum, quidem, enim voluptatem at ullam nihil
                providen non facilis fugit consequatur, fuga alias!
              </p>
            </div>
          </div>
          <div
            className={
              toggleState === 2 ? "content  active_content" : "content"
            }
          >
                <ul key={products.id} className="content_table">
                  <li className="container2_details">
                    Type de bois:{products.type}
                    <span className="container2_line">{products.type}</span>
                  </li>
                  <li className="container2_details">
                    Dimensions:{products.dimensions}
                    <span className="container2_line">
                    {products.dimensions}                    </span>
                  </li>
                  <li className="container2_details">
                    Poids:{" "}
                    <span className="container2_line">{products.weight}</span>
                  </li>
                  <li className="container2_details">
                    Couleur:{" "}
                    <span className="container2_line">{products.color}</span>
                  </li>
                  <li className="container2_details">
                    Nombre de portes:{" "}
                    <span className="container2_line">{products.doors}</span>
                  </li>
                </ul>
          </div>
          <div
            className={
              toggleState === 3 ? "content  active_content" : "content"
            }
          >
            <div className="content_text">
              <p>
                Question : Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
              </p>
              <p>
                Réponse : Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}