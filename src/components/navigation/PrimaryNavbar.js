import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/PrimaryNavBar.css';

const PrimaryNavbar = () => {
    return (

        <nav className="primary-navbar">


            <Link to="/" className="primary-navbar__link">
                <img src="images/igelogo.png" alt="Logo" style={{maxWidth: '60px', maxHeight: '60px'}}/>
            </Link>
            <Link to="/login" className="primary-navbar__link">
            <button className="button button-dark">Login</button>
            </Link>
            <Link to="/account" className="primary-navbar__link">
                <button className="button button-dark">Account</button>
            </Link>
            <Link to="/practice" className="primary-navbar__link">
                <button className="button button-dark">Practice</button>
            </Link>
        </nav>
    );
}

export default PrimaryNavbar;