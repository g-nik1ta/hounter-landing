import React from 'react';
import MyButton from '../UI/MyButton/MyButton';

const FeaturedHouse = () => {
    return (
        <section className='row featured-house'>
            <div className="head">
                <div className="title">
                    <p>Our Recommendation</p>
                    <h1>Featured House</h1>
                </div>
                <div className="category">
                    <div className="item active">House</div>
                    <div className="item">Villa</div>
                    <div className="item">Apartment</div>
                </div>
                <div className="arrow-box">
                    <MyButton/>
                    <MyButton/>
                </div>
            </div>
            <div className="content">

            </div>
        </section>
    )
}

export default FeaturedHouse;