import React from 'react';
import MyButton from './UI/MyButton/MyButton';

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
                            src={require('../assets/avatars/owner-1.png')}
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
            <div className='img-box'>
                <img className='house-1' src={require("../assets/ready-sell/house-1.png")} alt="img" />
                <img className='house-2' src={require("../assets/ready-sell/house-2.png")} alt="img" />
                <img className='house-3' src={require("../assets/ready-sell/house-3.png")} alt="img" />
                <img className='house-4' src={require("../assets/ready-sell/house-4.png")} alt="img" />
                <img className='play-video' src={require("../assets/ready-sell/play-video.png")} alt="img" />
            </div>
        </section>
    )
}

export default ReadySell;