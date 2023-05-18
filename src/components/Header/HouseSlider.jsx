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
        arrows: false,
        draggable: false
    }

    const slides = [
        {
            id: 1,
            width: 328,
            images: [{
                name: 'owner-6.png',
                left: ''
            },
            {
                name: 'owner-7.png',
                left: '30px'
            },
            {
                name: 'owner-1.png',
                left: '60px'
            }],
            title: '1K+ People',
            subtitle: 'Successfully Getting Home',
        },
        {
            id: 2,
            width: 201,
            images: [{
                name: 'owner-9.png',
                left: ''
            }],
            title: '56 Houses',
            subtitle: 'Sold Monthly',
        },
        {
            id: 3,
            width: 298,
            images: [{
                name: 'owner-8.png',
                left: ''
            }],
            title: '4K+',
            subtitle: 'People Looking for New Homes',
        },
    ]

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