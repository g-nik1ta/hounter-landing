import React from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HouseSlider = () => {
    const slides = useSelector(state => state.slidersInfoReducer.houseSlider);
    const settings = {
        className: 'house-slider',
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        variableWidth: true,
        arrows: false,
        draggable: false
    }
    
    return (
        <Slider {...settings}>
            {slides.map(item =>
                <div
                    key={item.id}
                    style={{ width: item.width }}
                    className="item"
                >
                    <div className="photos">
                        {item.images.map(img =>
                            <img
                                key={img.name}
                                src={require(`../../assets/avatars/${img.name}`)}
                                alt="img"
                                style={{ left: img.left }}
                            />
                        )}
                    </div>
                    <div className="title">
                        <h1>{item.title}</h1>
                        <p>{item.subtitle}</p>
                    </div>
                </div>
            )}
        </Slider>
    )
}

export default HouseSlider;