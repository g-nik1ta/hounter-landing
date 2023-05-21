import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';

const SeeReview = () => {
    const slides = useSelector(state => state.slidersInfoReducer.seeReview);
    const [settings, setSettings] = useState({
        className: 'content',
        centerMode: true,
        centerPadding: "320px",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 750,
        cssEase: 'linear',
        arrows: false,
    })

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 1620 && window.innerWidth < 1720) {
                setSettings({
                    ...settings,
                    centerPadding: "370px",
                })
            } else if (window.innerWidth >= 1720) {
                setSettings({
                    ...settings,
                    centerPadding: "450px",
                })
            } else if (window.innerWidth <= 1400 && window.innerWidth > 1250) {
                setSettings({
                    ...settings,
                    centerPadding: "250px",
                })
            } else if (window.innerWidth <= 1250 && window.innerWidth > 1040) {
                setSettings({
                    ...settings,
                    centerPadding: "210px",
                })
            } else if (window.innerWidth <= 1040 && window.innerWidth > 790) {
                setSettings({
                    ...settings,
                    centerPadding: "160px",
                })
            } else if (window.innerWidth <= 790) {
                setSettings({
                    ...settings,
                    centerMode: false,
                })
            } else setSettings({
                ...settings,
                centerPadding: "320px",
            })
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className='see-review'>
            <div className="head">
                <div className="title">
                    <p>See Our Review</p>
                    <h1>What Our User Say About Us</h1>
                </div>
            </div>
            <Slider {...settings}>
                {slides.map(item =>
                    <div className="item" key={item.id}>
                        <img
                            src={require(`../assets/see-review/${item.image}`)}
                            alt="img"
                            className='bc-photo'
                        />
                        <div className="comment-block">
                            <p className="title">{item.title}</p>
                            <p className="comment">{item.comment}</p>
                            <div className="owner-wrapper">
                                <div className="owner">
                                    <img
                                        src={require(`../assets/${item.ownerImg}`)}
                                        alt="img"
                                    />
                                    <div className="title">
                                        <h1>{item.ownerName}</h1>
                                        <p>{item.ownerJob}</p>
                                    </div>
                                </div>
                                <span className='grade'>{item.grade}</span>
                            </div>
                        </div>
                    </div>
                )}
            </Slider>
        </section>
    )
}

export default SeeReview;