import { Link } from 'react-router-dom';
import './styles.scss';

export default function Categories ({groupe, categories, selectCategory }) {


  console.log(groupe)
   console.log('j/arrive ici pour la 1ere fois');
   
  return (
    <div>
      <h2>{groupe}</h2>
      <ul>
        {categories?.map((category) => (
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
