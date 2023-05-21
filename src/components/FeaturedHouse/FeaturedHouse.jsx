import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getFilterSlides, toggleActiveClass, toggleItemsClass } from '../../utils/house';
import HouseItem from './HouseItem';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategoryCreator } from '../../store/categoryReducer';

const FeaturedHouse = () => {
    const itemsWrapper = useRef();
    const sliders = useSelector(state => state.slidersInfoReducer.featuredHouse);
    const category = useSelector(state => state.categoryReducer.category);
    const dispatch = useDispatch();
    const [slidesShow, setSlidesShow] = useState(4);
    const [settings, setSettings] = useState({
        className: 'content-slider',
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 750,
        cssEase: 'linear',
        draggable: false,
    })

    const toggleCategory = (e, category) => {
        dispatch(changeCategoryCreator(category))
        toggleActiveClass(e);
    }

    useEffect(() => {
        toggleItemsClass(itemsWrapper, category);
    }, [category])

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 1280 && window.innerWidth > 860) {
                setSettings({
                    ...settings,
                    slidesToShow: 3,
                })
                setSlidesShow(3);
            } else if (window.innerWidth <= 860 && window.innerWidth > 730) {
                setSettings({
                    ...settings,
                    slidesToShow: 2,
                })
                setSlidesShow(2);
            } else if (window.innerWidth <= 730) {
                setSettings({
                    ...settings,
                    slidesToShow: 1,
                })
                setSlidesShow(1);
            } else {
                setSettings({
                    ...settings,
                    slidesToShow: 4,
                })
                setSlidesShow(4)
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className='row featured-house' id='featured-house'>
            <div className="head">
                <div className="title">
                    <p>Our Recommendation</p>
                    <h1>Featured House</h1>
                </div>
                <div className="category" ref={itemsWrapper}>
                    <div
                        id='House'
                        className="item active"
                        onClick={(e) => toggleCategory(e, 'House')}
                    >House</div>
                    <div
                        id='Villa'
                        className="item"
                        onClick={(e) => toggleCategory(e, 'Villa')}
                    >Villa</div>
                    <div
                        id='Apartment'
                        className="item"
                        onClick={(e) => toggleCategory(e, 'Apartment')}
                    >Apartment</div>
                </div>
                <div className="arrow-box">
                </div>
            </div>
            {
                getFilterSlides(sliders, category).length < slidesShow
                    ?
                    <div className="content">
                        {getFilterSlides(sliders, category).map(item =>
                            <HouseItem item={item} key={item.id} />
                        )}
                    </div>
                    :
                    <Slider {...settings}>
                        {getFilterSlides(sliders, category).map(item =>
                            <HouseItem item={item} key={item.id} />
                        )}
                    </Slider>
            }
        </section>
    )
}

export default FeaturedHouse;