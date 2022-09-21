import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-solid-svg-icons';

export default function Footer () {
    return (
        <div className="footer-basic">
        <footer>
        <div class="social"><a href="#">
            <i class="fa fa-facebook"></i></a><a href="#">
            <i class='fa fa-twitter'></i></a><a href="#">
            <i class="fa fa-snapchat"></i></a><a href="#">
            <i class="fa fa-instagram"></i></a>
                </div>
        <ul class="list-inline">
            <li class="list-inline-item"><a href="#">Home</a></li>
            <li class="list-inline-item"><a href="#">Services</a></li>
            <li class="list-inline-item"><a href="#">About</a></li>
            <li class="list-inline-item"><a href="#">Terms</a></li>
            <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
        </ul>
        <p class="copyright">Company Name © 2018</p>
    </footer>
</div>
    )
}