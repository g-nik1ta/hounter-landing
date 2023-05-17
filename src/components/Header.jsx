import React from 'react';
import HeaderTitle from './HeaderTitle';
import House from './House';

const Header = () => {
    return (
        <header className='row'>
            <HeaderTitle/>
            <House/>
        </header>
    )
}

export default Header;