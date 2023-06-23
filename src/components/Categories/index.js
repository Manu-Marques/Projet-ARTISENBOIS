import { Link } from 'react-router-dom';
import './styles.scss';
import Bureau from '../../../src/assets/bureau.jpg';


export default function Categories({ groupe, categories, selectCategory }) {

  return (
    <div className="main">
      <h2 className="main_title">{groupe.replace(/_/g, ' ')}</h2>
        <div className='row1'>
          {categories?.map((category) => (
            <div key={category.id} className='image'>
              <img src={Bureau} alt="" />
              <div className="details">
              <h2 className='title'>{category.replace(/_/g, ' ')}</h2>
              <div className="more">
              <Link to={`/${groupe}/${category}`} className='read-more' onClick={() => selectCategory(category)}>
               Galerie
              </Link>
              <div className="icon-links">
              </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
  );
}

