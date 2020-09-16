import React from 'react';
import './Header.css';
import logo from '../../Image/Logo.png';
import coxsBazarImg from '../../Image/CoxsBazar.png';
import SremongolImg from '../../Image/Sreemongol.png';
import sundorBonImg from '../../Image/sundorbon.png';

const Header = () => {
    return (
        <header className="container">
            <nav>
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="search_fild">
                    <input type="search" placeholder="Search Your Destination"/>
                </div>
                <div className="nav_items">
                    <a href="/news">News</a>
                    <a href="/destination">Destination</a>
                    <a href="/blog">Blog</a>
                    <a href="/contact">Contact</a>
                </div>
                <button className="all_button">Login</button>
            </nav>
        </header>
    );
};

export default Header;