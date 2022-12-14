import './styles.scss';
import { NavLink } from 'react-router-dom';
import React from 'react';


export default function Footer() {
    return (
        <div className="footer-basic">
            <footer className="footer">
                <div className="social"><a href="#">
                    <i className="fa fa-facebook"></i></a><a href="#">
                        <i className='fa fa-twitter'></i></a><a href="#">
                        <i className="fa fa-snapchat"></i></a><a href="#">
                        <i className="fa fa-instagram"></i></a>
                </div>
                <ul className="list-inline">
                    <li className="list-inline-item">
                    <NavLink className="footer_contact" to="/">Home</NavLink></li>
                    <li className="list-inline-item">
                    <NavLink className="footer_contact" to="/contact">Contact</NavLink></li>
                    <li className="list-inline-item"><a href="#">About</a></li>
                    <li className="list-inline-item"><a href="#">Terms</a></li>
                </ul>
                <p className="copyright">ARTISENBOIS 2020</p>
            </footer>
        </div>
    )
}