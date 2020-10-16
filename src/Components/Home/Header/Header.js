import React from 'react';
import Clients from '../Clients/Clients';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../NavBar/NavBar';
import './Header.css'
const Header = () => {
    return (
        <div className="headerBg">
            <div className="headerBgMain mb-5">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            </div>
            <Clients></Clients>
        </div>
    );
};

export default Header;