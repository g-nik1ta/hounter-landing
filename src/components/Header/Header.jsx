import React from 'react';
import HeaderTitle from './HeaderTitle';
import HouseSlider from './HouseSlider';

const Header = () => {
    return (
        <header className='row'>
            <HeaderTitle />
            <div className='house'>
                <HouseSlider />
            </div>
        </header>
    )
}

export default Header;