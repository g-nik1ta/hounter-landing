import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getFilterSlides, toggleActiveClass } from '../../utils/house';
import HouseItem from './HouseItem';

const FeaturedHouse = () => {
    const [category, setCategory] = useState('House');
    const [slidesAll, setSlidesAll] = useState(4);
    const [settings, setSettings] = useState({
        className: 'content-slider',
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 750,
        cssEase: 'linear',
    })

    const sliders = [
        {
            id: 1,
            img: 'item-1.png',
            name: 'Roselands House',
            price: '$ 35.000.000',
            ownerImg: 'owner-1.png',
            title: 'Dianne Russell',
            subtitle: 'Manchester, Kentucky',
            category: 'House',
            chapter: 'Popular',
        },
        {
            id: 2,
            img: 'item-2.png',
            name: 'Woodlandside',
            price: '$ 20.000.000',
            ownerImg: 'owner-2.png',
            title: 'Robert Fox',
            subtitle: 'Dr. San Jose, South Dakota',
            category: 'House',
            chapter: 'New House',
        },
        {
            id: 3,
            img: 'item-3.png',
            name: 'The Old Lighthouse',
            price: '$ 44.000.000',
            ownerImg: 'owner-3.png',
            title: 'Ronald Richards',
            subtitle: 'Santa Ana, Illinois',
            category: 'House',
            chapter: 'Best Deals',
        },
        {
            id: 4,
            img: 'item-4.png',
            name: "Cosmo's House",
            price: '$ 22.000.000',
            ownerImg: 'owner-4.png',
            title: 'Jenny Wilson',
            subtitle: 'Preston Rd. Inglewood, Maine 98380',
            category: 'House',
            chapter: 'Popular',
        },
        {
            id: 5,
            img: 'item-5.jpg',
            name: 'Seaside Villa',
            price: '$ 72.000.000',
            ownerImg: 'owner-5.jpg',
            title: 'Emma Davis',
            subtitle: 'Brighton, England',
            category: 'Villa',
            chapter: '',
        },
        {
            id: 6,
            img: 'item-6.png',
            name: 'Luxury Villa',
            price: '$ 67.000.000',
            ownerImg: 'owner-6.png',
            title: 'Sophia Anderson',
            subtitle: 'Los Angeles, California',
            category: 'Villa',
            chapter: 'Popular',
        }, 
        {
            id: 7,
            img: 'item-7.jpg',
            name: 'City Apartment',
            price: '$ 2.500.000',
            ownerImg: 'owner-7.png',
            title: 'Michael Thompson',
            subtitle: 'New York City, New York',
            category: 'Apartment',
            chapter: 'Best Deals',
        },
        {
            id: 8,
            img: 'item-8.jpg',
            name: 'Penthouse Suite',
            price: '$ 15.000.000',
            ownerImg: 'owner-8.png',
            title: 'Alexandra Lee',
            subtitle: 'Sydney, Australia',
            category: 'Apartment',
            chapter: 'New House',
        },
        {
            id: 9,
            img: 'item-9.jpg',
            name: 'Modern Mansion',
            price: '$ 37.000.000',
            ownerImg: 'owner-6.png',
            title: 'Olivia Parker',
            subtitle: 'Beverly Hills, California',
            category: 'House',
            chapter: '',
        },
    ]

    const toggleCategory = (e, category) => {
        setCategory(category);
        toggleActiveClass(e);
    }

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 1280 && window.innerWidth > 860) {
                setSettings({
                    ...settings,
                    slidesToShow: 3,
                })
                setSlidesAll(3);
            } else if (window.innerWidth <= 860 && window.innerWidth > 730) {
                setSettings({
                    ...settings,
                    slidesToShow: 2,
                })
                setSlidesAll(2);
            } else if (window.innerWidth <= 730) {
                setSettings({
                    ...settings,
                    slidesToShow: 1,
                })
                setSlidesAll(1);
            } else {
                setSettings({
                    ...settings,
                    slidesToShow: 4,
                })
                setSlidesAll(4)
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        console.log(slidesAll);
        console.log(getFilterSlides(sliders, category));
    }, [slidesAll])

    return (
        <section className='row featured-house'>
            <div className="head">
                <div className="title">
                    <p>Our Recommendation</p>
                    <h1>Featured House</h1>
                </div>
                <div className="category">
                    <div
                        className="item active"
                        onClick={(e) => toggleCategory(e, 'House')}
                    >House</div>
                    <div
                        className="item"
                        onClick={(e) => toggleCategory(e, 'Villa')}
                    >Villa</div>
                    <div
                        className="item"
                        onClick={(e) => toggleCategory(e, 'Apartment')}
                    >Apartment</div>
                </div>
                <div className="arrow-box">
                </div>
            </div>
            {
                getFilterSlides(sliders, category).length < slidesAll
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