import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='container mt-5'>
            <h2 className='logo'>FURNITURE <span className='title-color'>WARE HOUSE</span></h2>
            <div className='text-center navbar-menu'>
                <Link to='/home'>Home</Link>
                <Link to='/blog'>Blogs</Link>
                <Link to='inventory-items'>Inventory-item</Link>
            </div>
        </div>
    );
};

export default Header;