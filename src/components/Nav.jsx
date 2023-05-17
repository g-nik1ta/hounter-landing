import React from 'react';
import MyButton from './UI/MyButton/MyButton';

const Nav = () => {
    return (
        <nav className='row'>
            <div className="logo-wrapper">
                <i className='logo'></i>
                <i className='logo'></i>
                <span>Hounter</span>
            </div>
            <div className="navbar">
                <span className='item'>About Us</span>
                <span className='item'>Article</span>
                <span className='item'>Property</span>
                <MyButton>Sign Up!</MyButton>
            </div>
        </nav>
    )
}

export default Nav;