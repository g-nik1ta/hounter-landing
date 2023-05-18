import React from 'react';
import HouseSlider from './HouseSlider';

const House = () => {
    return (
        <div className='house'>
            <img src={require("../../assets/header/house-angles.png")} alt="img" />
            <HouseSlider />
        </div>
    )
}

export default House;