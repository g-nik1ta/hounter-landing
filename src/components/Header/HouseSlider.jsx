import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HouseSlider = () => {
    const settings = {
        className: 'house-slider',
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        variableWidth: true,
    }

    return (
        <Slider {...settings}>
            <div style={{ width: 328 }} className='item'>
                <div className="photos">
                    <img
                        src={require("../../assets/house-slider/Ellipse-1.png")}
                        alt="img"
                        style={{}}
                    />
                    <img
                        src={require("../../assets/house-slider/Ellipse-2.png")}
                        alt="img"
                        style={{left: '30px'}}
                    />
                    <img
                        src={require("../../assets/house-slider/Ellipse-3.png")}
                        alt="img"
                        style={{left: '60px'}}
                    />
                </div>
                <div className="title">
                    <h1>1K+ People</h1>
                    <p>Successfully Getting Home</p>
                </div>
            </div>
            <div style={{ width: 201 }} className='item'>
                <div className="photos">
                    <img src={require("../../assets/house-slider/Ellipse-4.png")} alt="img" />
                </div>
                <div className="title">
                    <h1>56 Houses</h1>
                    <p>Sold Monthly</p>
                </div>
            </div>
            <div style={{ width: 298 }} className='item'>
                <div className="photos">
                    <img src={require("../../assets/house-slider/Ellipse-5.png")} alt="img" />
                </div>
                <div className="title">
                    <h1>4K+</h1>
                    <p>People Looking for New Homes</p>
                </div>
            </div>
        </Slider>
    )
}

export default HouseSlider;