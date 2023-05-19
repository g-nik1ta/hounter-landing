import React from 'react';
import MyButton from '../UI/MyButton/MyButton';
import ImageSlider from './ImageSlider';

const ReadySell = () => {
    return (
        <section className='row ready-sell'>
            <div className='content'>
                <div className="head">
                    <div className="title">
                        <p>Ready to Sell!</p>
                        <h1>Let’s tour and see our house!</h1>
                    </div>
                </div>
                <div className="subtitle">
                    Houses recommended by our partners that have been curated to become the home of your dreams!
                </div>
                <div className="details">
                    <span className="title">House Detail</span>
                    <p className="item">4 Bedrooms</p>
                    <p className="item">2 Bathrooms</p>
                    <p className="item">1 Carport</p>
                    <p className="item">2 Floors</p>
                </div>
                <hr />
                <div className="contact-container">
                    <div className="owner">
                        <img
                            src={require('../../assets/avatars/owner-1.png')}
                            alt="img"
                        />
                        <div className="title">
                            <h1>Dianne Russell</h1>
                            <p>Manager Director</p>
                        </div>
                    </div>
                    <MyButton>Contact Now</MyButton>
                </div>
            </div>
            <ImageSlider/>
        </section>
    )
}

export default ReadySell;