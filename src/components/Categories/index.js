import { Link } from 'react-router-dom';
import './styles.scss';

export default function Categories ({groupe, categories, selectCategory }) {

   
  return (
    <div>
      <h2>{groupe.replace(/_/g,' ')}</h2>
      <ul>
        {categories?.map((category) => (
          <li key={category}>
            <Link to={`/${groupe}/${category}`} onClick={() => selectCategory(category)}>
            {category.replace(/_/g, ' ')}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
