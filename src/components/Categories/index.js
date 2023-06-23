import { Link } from 'react-router-dom';
import './styles.scss';

export default function Categories ({groupe, categories, selectCategory }) {
  const formattedCategories = categories?.map((category) => category.replace(/_/g, ' '));
   
  return (
    <div>
      <h2>{groupe.replace(/_/g,' ')}</h2>
      <ul>
        {formattedCategories?.map((category) => (
          <li key={category}>
            <Link to={`/${groupe}/${category}`} onClick={() => selectCategory(category)}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
