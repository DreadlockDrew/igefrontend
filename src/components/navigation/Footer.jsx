import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Footer.css';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <nav className="footer">
                <Link to="/" className="footer__link">
                Home
                </Link>
                <Link to="/login" className="footer__link">
                Terms of Service
                </Link>
                <Link to="/account" className="footer__link">
                    Privacy Policy
                </Link>
            </nav>
            <p style={{textAlign: 'center'}}>©2024 Interview Launchpad</p>
        </div>
    );
}

export default Footer;