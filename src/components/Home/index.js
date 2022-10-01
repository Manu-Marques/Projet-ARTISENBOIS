import './styles.scss';
import Accueil from '../../../src/assets/Accueil.jpg';

export default function Home() {
    return (
        <div className="home">
            <div className="label">
                <span className="text1">Votre bonheur</span>
                <span className="text2">sur mesure</span>
            </div>
            <img className="home_logo" src={Accueil} alt="Logo ArtisenBois" />
        </div>
    )
}