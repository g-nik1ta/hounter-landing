import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
    const settings = {
        className: 'img-slider',
        dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        arrows: false,
        draggable: false,
        pauseOnHover: true
    }
    const sliderRef = useRef()
    const [inactiveSlides, setInactiveSlides] = useState([]); 

    useEffect(() => {
        const sliderElement = sliderRef.current;
        const slider = sliderElement.innerSlider.list;
        const slides = slider.querySelectorAll('.slick-track > .slick-slide');
        
        const inactiveSlidesArray = Array.from(slides).filter((slide) => !slide.classList.contains('slick-active'));
        const houseImgArray = inactiveSlidesArray.map(element => element.children[0].children[0])
        setInactiveSlides(houseImgArray);

        const timer = setInterval(() => {
            const inactiveSlidesArray = Array.from(slides).filter((slide) => !slide.classList.contains('slick-active'));
            const houseImgArray = inactiveSlidesArray.map(element => element.children[0].children[0])
            setInactiveSlides(houseImgArray);
        }, 100);
    }, [])
    
    return (
        <div className='img-box'>
            <Slider {...settings} ref={sliderRef}>
                <img src={require("../../assets/ready-sell/house-1.png")} alt="img" />
                <img src={require("../../assets/ready-sell/house-2.png")} alt="img" />
                <img src={require("../../assets/ready-sell/house-3.png")} alt="img" />
                <img src={require("../../assets/ready-sell/house-4.png")} alt="img" />
            </Slider>
            {
                inactiveSlides.length > 0 &&
                <>
                    <img className='house-2 house' src={inactiveSlides[0].src} alt="img" />
                    <img className='house-3 house' src={inactiveSlides[1].src} alt="img" />
                    <img className='house-4 house' src={inactiveSlides[2].src} alt="img" />
                </>
            }
            <img className='play-video' src={require("../../assets/ready-sell/play-video.png")} alt="img" />
        </div>
    )
}

export default ImageSlider;