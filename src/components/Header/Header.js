import React from 'react';
import logo from '../../LOGO1.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header-logo container text-start'>
            <img src={logo} className="App-logo" alt="logo" />

        </div>
    );
};

export default Header;