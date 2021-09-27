import React from 'react';
import './header.css';

import logo from '../../images/mealdblogo.png'


const Header = () => {
    return (
        <div>
           <div className="header">
               <div className="logo">
                   <img src={logo} alt="..." />
               </div>
               <div className="menu">
                   <a href="/home">Home</a>
                   <a href="/about">About Us</a>
                   <a href="/contact">Contact Us</a>
               </div>
           </div>
        </div>
    );
};

export default Header;