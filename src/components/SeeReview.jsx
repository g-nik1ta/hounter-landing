import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyButton from './UI/MyButton/MyButton';

const SeeReview = () => {
    const settings = {
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
    }

    const slides = [
        {
            id: 1,
            image: 'house-1.png',
            title: 'My house sold out fast!',
            comment: 'I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!',
            ownerImg: 'avatars/owner-3.png',
            ownerName: 'Courtney Henry',
            ownerJob: 'CEO Andarafish',
            grade: '4.3',
        },
        {
            id: 2,
            image: 'house-2.png',
            title: 'Best! I got the house I wanted through Hounter',
            comment: 'Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.',
            ownerImg: 'avatars/owner-1.png',
            ownerName: 'Dianne Russell',
            ownerJob: 'Manager Director',
            grade: '4.6',
        },
        {
            id: 3,
            image: 'house-3.png',
            title: 'Through the Hounter, I can get a house for my self',
            comment: 'By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!',
            ownerImg: 'avatars/owner-6.png',
            ownerName: 'Esther Howard',
            ownerJob: 'Head of Marketing',
            grade: '4.6',
        },
    ]

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
                        <img src={require(`../assets/see-review/${item.image}`)} alt="img" />
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