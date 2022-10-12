import './styles.scss';
import { NavLink } from 'react-router-dom';


export default function Login() {
    return (
        <><section class="top-nav">
            <div>
                Logo Here
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label class='menu-button-container' for="menu-toggle">
                <div class='menu-button'></div>
            </label>
            <ul class="menu">
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                <li>Four</li>
                <li>Five</li>
            </ul>
        </section><h2>Resize window to collapse menu</h2></>
    )
}